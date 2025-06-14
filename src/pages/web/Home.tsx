import React, { Suspense } from "react"

const HomeInfoCards = React.lazy(() => import('@/components/organisms/HomeInfoCards'));
const HeroSection = React.lazy(() => import('@/components/organisms/HeroSection'));
const InfoHorizontalTab = React.lazy(() => import('@/components/organisms/InfoHorizontalTab'));
const HomePricing = React.lazy(() => import('@/components/organisms/HomePricing'));
const EmailSubscription = React.lazy(() => import('@/components/organisms/EmailSubscription'));
const TopWorkTools = React.lazy(() => import('@/components/organisms/TopWorkTools'));
const Testmonial = React.lazy(() => import('@/components/organisms/Testimonial'));

const HomePage: React.FC = () => {
    return <>
        <Suspense fallback={<div>Loading...</div>}>
            <HeroSection />
            <HomeInfoCards />
            <InfoHorizontalTab />
            <HomePricing />
            <Testmonial />
            <TopWorkTools />
            <EmailSubscription />
        </Suspense>
    </>
}

export default HomePage