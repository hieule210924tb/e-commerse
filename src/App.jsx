import MyHeader from '@/components/Header/Header';
import MyFooter from '@/components/Footer/Footer';
import MyLayout from '@/components/Layout/Layout';
function App() {
    return (
        <MyLayout>
            <MyHeader />
            content
            <MyFooter />
        </MyLayout>
    );
}

export default App;
