from django.test import TestCase
from django.contrib.auth import get_user_model


class ModelTest(TestCase):

    def test_create_user_with_email_successful(self):
        '''
            Test creating a new user with email is successful
        '''
        email = 'test@terstor.com'
        password = 'Testpass123'
        user = get_user_model().objects.create_user(
            email=email,
            password=password
        )
        self.assertEqual(user.email, email)
        self.assertTrue(user.check_password(password))


    def test_new_user_email_normalzed(self):
        '''
            Test the email for a new user in normalized
        '''
        email = 'test@TERSTOR.com'
        user = get_user_model().objects.create_user(
            email=email,
            password='Testpass123'
        )
        self.assertEqual(user.email, email.lower())

