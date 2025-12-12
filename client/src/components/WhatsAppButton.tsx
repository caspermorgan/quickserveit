import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
  variant?: 'default' | 'outline' | 'icon';
  children?: React.ReactNode;
}

/**
 * WhatsAppButton Component
 * Opens a WhatsApp conversation with pre-filled message
 *
 * IMPORTANT: Replace REPLACE_WITH_PHONE_NUMBER with your actual phone number
 * Format: country code + number (e.g., 919876543210 for India)
 *
 * Usage:
 * <WhatsAppButton phoneNumber="919876543210" message="Hello, I need support" />
 * <WhatsAppButton>Chat on WhatsApp</WhatsAppButton>
 */
export function WhatsAppButton({
  phoneNumber = 'REPLACE_WITH_PHONE_NUMBER',
  message = 'Hello, I would like to inquire about your services',
  className = '',
  variant = 'default',
  children,
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-colors';
  
  const variantStyles = {
    default: 'bg-green-500 hover:bg-green-600 text-white px-4 py-2',
    outline: 'border-2 border-green-500 text-green-500 hover:bg-green-50 px-4 py-2',
    icon: 'text-green-500 hover:text-green-600 hover:bg-green-100 p-2 rounded-full',
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={20} />
      {children || 'Chat on WhatsApp'}
    </a>
  );
}

export default WhatsAppButton;
