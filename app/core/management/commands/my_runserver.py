import os
import subprocess
import threading

from django.contrib.staticfiles.management.commands.runserver import (
    Command as StaticFileRunserverCommand,
)

from django.utils.autoreload import DJANGO_AUTORELOAD_ENV


class Command(StaticFileRunserverCommand):
    """ This command removes the need for two terminal windows when running
    server """

    help = (
        "Runs npm run dev in own thread"
    )

    def add_arguments(self, parser):
        super().add_arguments(parser)
        parser.add_argument(
            "--npm-command",
            dest="npm_command",
            default="npm run --prefix frontend/ dev",
            help="Starts react code in new thread",
        )

    def run(self, **options):
        """ Run the server with webpack"""
        if os.environ.get(DJANGO_AUTORELOAD_ENV) != "true":
            self.stdout.write("Starting webpack build thread.")
            command = options["npm_command"]
            kwargs = {"shell": True}
            wp_thread = threading.Thread(
                target=subprocess.run,
                args=(command,), kwargs=kwargs
            )
            wp_thread.start()
        super(Command, self).run(**options)
