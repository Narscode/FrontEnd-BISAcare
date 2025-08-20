import React from 'react';
import { render } from '@testing-library/react-native';
import OnboardingContainer from '../src/containers/OnboardingContainer';

// Removed duplicate test case

describe('OnboardingContainer', () => {
  it('renders correctly', () => {
    const { getByText } = render(<OnboardingContainer />);
    expect(getByText('Onboarding')).toBeTruthy();
  });
});
