import Container from "../components/ui/Container.jsx";
import Button from "../components/ui/Button.jsx";
import Icon from "../components/ui/Icon.jsx";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-20">
      <Container className="flex flex-col items-center gap-5 text-center">
        <span className="font-display text-7xl font-semibold text-blush-300">404</span>
        <h1 className="text-2xl font-semibold text-ink-900">Page Not Found</h1>
        <p className="max-w-sm text-ink-400">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Button to="/" variant="gold" icon={<Icon name="arrowRight" className="h-4 w-4" />}>
          Back to Home
        </Button>
      </Container>
    </section>
  );
}
