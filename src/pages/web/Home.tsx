import React from "react"
import HomeInfoCards from "@/components/organisms/HomeInfoCards"
import HeroSection from "@/components/organisms/HeroSection"
import InfoHorizontalTab from "@/components/organisms/InfoHorizontalTab"
import HomePricing from "@/components/organisms/HomePricing"

const HomePage: React.FC = () => {
    return <>
        <HeroSection />
        <HomeInfoCards />
        <InfoHorizontalTab />
        <HomePricing />
    </>
}

export default HomePage