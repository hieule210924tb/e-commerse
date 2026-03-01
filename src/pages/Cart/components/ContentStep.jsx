import { useContext } from 'react';
import { StepperContext } from '@/contexts/SteperProvider';
import Content from '@/pages/Cart/components/contents/Content';
import Checkout from '@/pages/Cart/components/Checkout/Checkout';

function ContentStep() {
    const { currentStep } = useContext(StepperContext);
    const handleRenderContent = () => {
        switch (currentStep) {
            case 1:
                return <Content />;
            case 2:
                return <Checkout />;
            case 3:
                return <>step 3</>;
        }
    };
    return <>{handleRenderContent()}</>;
}

export default ContentStep;
