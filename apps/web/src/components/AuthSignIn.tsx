'use client';

import { useState } from 'react';
import Image from 'next/image';
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
import { AtSign, Eye, EyeOff, KeyRound } from '@healthkoins/design/icons';
import { LogoImageGoogle } from '@healthkoins/design/images';
import ROUTES from '../constants/ROUTES';
import AuthLayout from './AuthLayout';

export default function AuthSignIn() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <AuthLayout
      title="Welcome Back"
      description="Access the Golden Legacy"
      footerLabel="New to HealthKoins?"
      route={ROUTES.SIGN_UP}
    >
      <FieldGroup>
        <FieldSet>
          <Field>
            <FieldLabel htmlFor="email">Email Address</FieldLabel>
            <Input
              id="email"
              type="email"
              icon={AtSign}
              placeholder="name@example.com"
              size="lg"
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
              size="lg"
            />
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="remember" defaultChecked={true} />
            <FieldLabel htmlFor="remember">Remember me</FieldLabel>
            <Button variant="link">Forgot Password</Button>
          </Field>
          <Button size="lg">Sign In</Button>
        </FieldSet>
        <Marker variant="separator">
          <MarkerContent>Elite Access</MarkerContent>
        </Marker>
        <Button variant="outline" size="lg">
          <Image
            src={LogoImageGoogle}
            alt="Sign in with Google"
            width={14}
            height={14}
          />
          Sign in with Google
        </Button>
      </FieldGroup>
    </AuthLayout>
  );
}
