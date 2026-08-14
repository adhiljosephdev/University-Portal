from django import forms
from .models import Student

class StudentForm(forms.ModelForm):
    class Meta:
        model = Student
        # Specifies exactly which fields to show for security
        fields = ['first_name', 'last_name', 'email', 'courses']

        # Custom styling (Bootstrap classes)
        widgets = {
            'first_name': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Enter Name'
            }),
            'email': forms.EmailInput(attrs={
                'class': 'form-control'
            }),
            'courses': forms.CheckboxSelectMultiple() # Changes default multi-select to checkboxes
        }

    # Custom validation for data integrity
    def clean_email(self):
        email = self.cleaned_data.get('email')
        if not email.endswith('@university.edu'):
            raise forms.ValidationError(
                "Only university emails are allowed."
            )
        return email