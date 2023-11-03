const CaseStudy = ({ params }: { params: { caseStudy: string } }) => (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-serif">Hello world!</h1>
        <h2>{params.caseStudy}</h2>
    </div>
)

export default CaseStudy
