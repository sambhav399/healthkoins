'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@healthkoins/design/components/button';
import { Checkbox } from '@healthkoins/design/components/checkbox';
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet
} from '@healthkoins/design/components/field';
import { Input } from '@healthkoins/design/components/input';
import { Marker, MarkerContent } from '@healthkoins/design/components/marker';
import {
  AtSign,
  Eye,
  EyeOff,
  KeyRound,
  Ticket,
  UserRound
} from '@healthkoins/design/icons';
import { LogoImgGoogle } from '@healthkoins/design/logo';
import ROUTES from '../constants/ROUTES';
import AuthLayout from './AuthLayout';

export default function AuthSignUp() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <AuthLayout
      title="Claim Your Identity"
      description="Access the Golden Legacy"
      footerLabel="Already have an account?"
      route={ROUTES.SIGN_IN}
    >
      <FieldGroup>
        <FieldSet>
          <Field>
            <FieldLabel htmlFor="name">Username</FieldLabel>
            <Input
              id="name"
              type="text"
              icon={UserRound}
              placeholder="username"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Email Address</FieldLabel>
            <Input
              id="email"
              type="email"
              icon={AtSign}
              placeholder="name@example.com"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              icon={KeyRound}
              iconRight={showPassword ? Eye : EyeOff}
              iconRightClick={() => setShowPassword((s) => !s)}
              placeholder="Password"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="referral">Referral Code</FieldLabel>
            <Input
              id="referral"
              type="text"
              icon={Ticket}
              placeholder="HLTKNS60"
            />
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="age" defaultChecked={false} />
            <FieldLabel htmlFor="age">I am at least 13 years old.</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="agreement" defaultChecked={false} />
            <FieldLabel htmlFor="agreement">
              I agree to the{' '}
              <Link href={ROUTES.TERMS_OF_USE.href} className="link">
                Terms of Use
              </Link>{' '}
              and{' '}
              <Link href={ROUTES.PRIVACY_POLICY.href} className="link">
                Privacy Policy
              </Link>
            </FieldLabel>
          </Field>
          <Button>Create Account</Button>
        </FieldSet>
        <Marker variant="separator">
          <MarkerContent>Elite Access</MarkerContent>
        </Marker>
        <Button variant="outline">
          <Image
            src={LogoImgGoogle}
            alt="Sign in with Google"
            width={14}
            height={14}
          />
          Sign up with Google
        </Button>
      </FieldGroup>
    </AuthLayout>
  );
}
