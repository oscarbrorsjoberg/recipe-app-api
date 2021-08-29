from django.test import TestCase
from django.contrib.auth import get_user_model

from core import models


def sample_user(email='test@testor.com', password='testpass'):
    ''' create sample user '''
    return get_user_model().objects.create_user(email, password)


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

    def test_new_user_invalid_email(self):
        ''' Test creating user with no email raises error'''
        with self.assertRaises(ValueError):
            get_user_model().objects.create_user(None, "testpass123")

    def test_create_new_superuser(self):
        ''' Test creating new super user '''
        user = get_user_model().objects.create_superuser(
            'test@terstor.com',
            'test123',
        )
        self.assertTrue(user.is_superuser)
        self.assertTrue(user.is_staff)

    def test_tag_str(self):
        ''' test tag string representation'''
        tag = models.Tag.objects.create(
            user=sample_user(),
            name='Vegan'
        )

        self.assertEqual(str(tag), tag.name)
