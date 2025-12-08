import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="relative flex h-screen items-center justify-center overflow-hidden p-3">
      <SignIn />
      {/* Animated Grid Background */}
      <div
        className="absolute inset-0 -z-50 h-screen w-screen opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          transform: `perspective(500px) rotateX(60deg) scale(2) translateY(-50%)`,
          transformOrigin: "center top",
        }}
      />

      {/* Pulsing Dots */}
      <div
        className="absolute top-1/3 right-1/4 h-2 w-2 rounded-full bg-white"
        style={{ animation: "pulse 2s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-1/3 left-1/3 h-2 w-2 rounded-full bg-white"
        style={{ animation: "pulse 2s ease-in-out infinite 0.5s" }}
      />
      <div
        className="absolute top-21 left-[10%] h-2 w-2 rounded-full bg-white"
        style={{ animation: "pulse 2s ease-in-out infinite 1s" }}
      />
    </main>
  );
}
