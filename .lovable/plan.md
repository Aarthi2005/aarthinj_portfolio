## Goal
Replace the current mailto-based contact form with EmailJS so visitor submissions are sent directly to aarthinagaraj2005@gmail.com.

## Credentials Provided
- Public Key: `VOpPSOT6poPfuXy-2`
- Template ID: `template_fq1yrtf`
- Service ID: `service_s7rmb3t`

## Plan

### 1. Install EmailJS SDK
Install `@emailjs/browser` via bun.

### 2. Update Contact Form (`src/components/portfolio/Contact.tsx`)
- Import `emailjs` from `@emailjs/browser`.
- Add state: `loading` and `status` (success / error).
- Replace the mailto `onSubmit` handler with `emailjs.sendForm(...)` using the provided public key, service ID, and template ID.
- On success: show a confirmation message and clear the form.
- On error: show an error message.
- Disable the submit button and show a spinner while sending.

### 3. UX Polish
- Keep the existing glassmorphic styling.
- Show inline success/error feedback instead of opening the mail client.
- Input validation remains via HTML `required` attributes.

## Out of Scope
- Server-side handling (EmailJS is a browser-only send).
- Input sanitization beyond HTML5 validation (EmailJS handles escaping on their end).

## Files to Change
- `src/components/portfolio/Contact.tsx`
- `package.json` / `bun.lock` (via `bun add`)
