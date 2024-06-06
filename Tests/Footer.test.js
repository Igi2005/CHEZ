import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from '../src/Components/Footer';
import { describe, test, expect } from '@jest/globals';
import { FaApplePay } from "react-icons/fa";
import { RiVisaFill } from "react-icons/ri";
import { MdOutlinePayment } from "react-icons/md";
import { FaGooglePay } from "react-icons/fa";
import { LiaPaypal } from "react-icons/lia";


describe('Footer Component', () => {
  test('renders customer service section with all links', () => {
    render(<Footer />);

    // Check for the CUSTOMER SERVICE text
    expect(screen.getByText('CUSTOMER SERVICE')).toBeInTheDocument();

    // Check for all customer service links
    const customerServiceLinks = [
      'PROVABLY FAIR',
      'TERMS OF SERVICE',
      'PRIVACY POLICY',
      'SUPPORT',
      'FAQ',
    ];

    customerServiceLinks.forEach((linkText) => {
      expect(screen.getByText(linkText)).toBeInTheDocument();
    });
  });

  test('renders all links', () => {
    render(<Footer />);  


    const socialMediaLinks = [
        'https://www.facebook.com/?locale=pl_PL',
        'https://www.instagram.com/bambi.ofc/',
        'https://www.youtube.com/watch?v=md4rmVv5qDU',
        'https://twitter.com/home?lang=pl'
    ];

  
    screen.getAllByRole('link').forEach((linkElement) => {
        if (linkElement.href != 'http://localhost/#') {
            expect(linkElement.href).toBe(socialMediaLinks.shift());  

        }

    });
  });

  test('renders all payment icons', () => {
    render(<Footer />);

    // Payment icons to check
    const paymentIcons = [
      FaApplePay,
      RiVisaFill,
      MdOutlinePayment,
      FaGooglePay,
      LiaPaypal
    ];

    paymentIcons.forEach((icon) => {
        expect(render(icon).baseElement).toBeInTheDocument();
    });
  });
});