import { BodyText, Display, Heading } from "@/components/atoms/Typography"

const Testmonial: React.FC = () => {
    return <section className="bg-gray-100 p-24">
            <div className="container">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-6 bg-gray-900 text-white p-12 rounded-lg h-[400px]">
                        <Display variant="d1">420k</Display>
                        <BodyText variant="body-xxl" className="font-manrope">users are taking advantage of our Task Manager Tool. It’s a new transparent and efficient way to organize all of your daily tasks.</BodyText>
                    </div>
                    <div className="col-span-6 bg-white p-12 rounded-lg h-[400px] place-content-center">
                        <BodyText variant="body-l" className="text-gray-700" >Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.</BodyText>
                    </div>
                </div>
            </div>
    </section>
}


export default Testmonial