import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';

import HomePage from "./pages/HomePage/HomePage";
import {ToolsPage} from "./pages/ToolsPage/ToolsPage";
import {Header} from "./components/Header/Header";
import {WhatWeDo} from "./pages/WhatWeDoPage/WhatWeDo";
import {PreviewSection} from "./pages/PreviewSection/PreviewSection";
import {ClientsPage} from "./pages/ClientsPage/ClientsPage";

import timer from "./assets/icon/timer.svg";
import objectiv from "./assets/icon/objectiv.svg";
import iso from "./assets/icon/iso.svg";
import local from "./assets/icon/location.svg";

//bg
import mountainBG from './assets/bg/mountain-bg.jpg'
import leafsBG from './assets/bg/leafs-bg.jpg'
import snowMountainBG from './assets/bg/snow-mountain-bg.jpg'
import {NeedHelpPage} from "./pages/NeedHelpPage/NeedHelpPage";
import {Footer} from "./pages/Footer/Footer";
import LoginForm from './components/LoginForm/LoginForm';
import {useMyStore} from "./store/Context/Context";
import {Preloader} from "./components/Preloader/Preloader";
import {ErrorModal} from "./components/ErrorModal/ErrorModal";
import {ConfirmMailPage} from "./pages/ConfirmMailPage/ConfirmMailPage";
import {LoginLabel} from "./components/LoginLabel/LoginLabel";

function App() {
    const arrayIconsMountain = [{icon: timer, text: '1"'}, {icon: objectiv, text: 'f/16'}, {
        icon: iso,
        text: '400'
    }, {icon: local, text: 'Japan'}]

    const arrayIconsLeafs = [{icon: timer, text: '1/400s'}, {icon: objectiv, text: 'f/3,5'}, {
        icon: iso,
        text: '100'
    }, {icon: local, text: 'Costa Rica'}]

    const arrayIconsSnowMountain = [{icon: timer, text: '6"'}, {icon: objectiv, text: 'f/11'}, {
        icon: iso,
        text: '800'
    }, {icon: local, text: 'Nepal'}]

    const {store} = useMyStore()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])

    if (store.isLoading) {
        return <Preloader/>
    }

    if (!store.isAuth) {
        return <>
            <LoginForm/>
            {store.errorText && <ErrorModal/>}
        </>
    }

    if (!store.user.isActivated) {
        return <ConfirmMailPage/>
    }

    return (
        <>
            <Header/>
            <HomePage/>
            <WhatWeDo/>
            <PreviewSection
                anchor={'Images'}
                bgImage={mountainBG}
                dataIcon={arrayIconsMountain}
                title={'Sunset at Mount Fuji'}
                text={'Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.'}/>
            <ToolsPage/>
            <PreviewSection
                title={'Monstera Leafs'}
                text={'Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.'}
                bgImage={leafsBG}
                dataIcon={arrayIconsLeafs}/>
            <ClientsPage/>
            <PreviewSection
                title={'Star fall in the Himalayas'}
                text={'Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.'}
                bgImage={snowMountainBG} dataIcon={arrayIconsSnowMountain}/>
            <NeedHelpPage/>
            <Footer/>
            <LoginLabel email={store.user.email}/>
            {store.errorText && <ErrorModal/>}
        </>
    );
}

export default observer(App);
