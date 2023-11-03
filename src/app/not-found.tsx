import Button from '@/components/Button'

const NotFound = () => (
    <div className="flex flex-col items-center justify-center gap-4 min-h-screen">
        <h2 className="text-xl md:text-3xl font-serif">Not Found</h2>
        <p className="md:text-base-variant">
            Could not find requested resource
        </p>
        <Button variant="default" href="/" ariaLabel="return to homepage">
            Return Home
        </Button>
    </div>
)

export default NotFound
