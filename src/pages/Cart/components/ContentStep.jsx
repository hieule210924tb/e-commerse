import { useContext } from 'react';
import { StepperContext } from '@/contexts/SteperProvider';
import Content from '@/pages/Cart/components/contents/Content';

function ContentStep() {
    const { currentStep } = useContext(StepperContext);
    const handleRenderContent = () => {
        switch (currentStep) {
            case 1:
                return <Content />;
            case 2:
                return <>checkout</>;
            case 3:
                return <>step 3</>;
        }
    };
    return <>{handleRenderContent()}</>;
}

export default ContentStep;
