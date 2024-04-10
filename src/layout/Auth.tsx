import { SignedIn, UserButton } from '@clerk/nextjs';

const Auth = () => {
  return (
    <SignedIn>
      <UserButton
        afterSignOutUrl="/"
        appearance={{
          elements: {
            userButtonTrigger: {
              "&:focus": {
                boxShadow: "#7857FF 0px 0px 0px 3px",
              },
            },
          },
        }}
      />
    </SignedIn>
  );
};

export default Auth;
