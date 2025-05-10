import Home from '@components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from '@/routes/routes';
import { Suspense } from 'react';
function App() {
    return (
        <BrowserRouter>
            {/* Suspense : dùng để khi chờ thì nó sẽ hiện dòng loading */}
            <Suspense fallback={<div>Loading ...</div>}>
                <Routes>
                    {routers.map((item, index) => {
                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={<item.component />}
                            />
                        );
                    })}
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
