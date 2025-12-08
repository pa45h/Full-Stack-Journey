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

      {/* Geometric Shapes */}
      <div className="animate-spin-slow absolute top-20 right-20 h-32 w-32 rounded-full border-2 border-white/20" />
      <div
        className="absolute top-1/4 left-1/2 h-16 w-16 border-2 border-white/10"
        style={{ animation: "float 5s ease-in-out infinite" }}
      />

      {/* Pulsing Dots */}
      <div
        className="absolute top-1/3 right-1/4 h-2 w-2 rounded-full bg-white"
        style={{ animation: "pulse 2s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-1/3 left-1/2 h-2 w-2 rounded-full bg-white"
        style={{ animation: "pulse 2s ease-in-out infinite 0.5s" }}
      />
      <div
        className="absolute top-21 left-[10%] h-2 w-2 rounded-full bg-white"
        style={{ animation: "pulse 2s ease-in-out infinite 1s" }}
      />
    </main>
  );
}
