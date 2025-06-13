import React from "react"
import HomeInfoCards from "@/components/organisms/HomeInfoCards"
import HeroSection from "@/components/organisms/HeroSection"
import InfoHorizontalTab from "@/components/organisms/InfoHorizontalTab"
import HomePricing from "@/components/organisms/HomePricing"
import EmailSubscription from "@/components/organisms/EmailSubscription"
import TopWorkTools from "@/components/organisms/TopWorkTools"
import Testmonial from "@/components/organisms/Testimonial"

const HomePage: React.FC = () => {
    return <>
        <HeroSection />
        <HomeInfoCards />
        <InfoHorizontalTab />
        <HomePricing />
        <Testmonial />
        <TopWorkTools />
        <EmailSubscription />
    </>
}

export default HomePage