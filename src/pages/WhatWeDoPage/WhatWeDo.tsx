import React from 'react';
import styles from './WhatWeDo.module.scss'
import {PreviewCard, PreviewCardProps} from "../../components/PreviewCard/PreviewCard";
import bgCard1 from '../../assets/previewCard/bg-1.jpg'
import bgCard2 from '../../assets/previewCard/bg-2.jpg'
import bgCard3 from '../../assets/previewCard/bg-3.jpg'
import bgCard4 from '../../assets/previewCard/bg-4.jpg'

export const WhatWeDo: React.FC = () => {

    const arrayPreviewCard: Array<PreviewCardProps> = [
        {
            bgImage: bgCard1,
            title: 'Product Photography',
            text: 'Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.'
        },
        {
            bgImage: bgCard2,
            title: 'Architecture Photography',
            text: 'Aenean porta neque eget consequat fringilla. Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Fusce tincidunt aliquet sapien, sit amet rhoncus leo imperdiet nec.',
        },
        {
            bgImage: bgCard3,
            title: 'Drone Photography',
            text: 'Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.',
        }, {
            bgImage: bgCard4,
            title: 'Wildlife Photography',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis.'
        }
    ]

    return (
        <section className={styles['wrapper']}>
            <div className={styles['title-inner']}>
                <h2 className={styles['title-inner-title']}>What we do.</h2>
                <h3 className={styles['title-inner-sub-title']}>The areas that we're specialized in.</h3>
            </div>
            <div className={styles['preview-card-inner']}>
                {arrayPreviewCard.map((card, index)=>{
                    return <PreviewCard key={index} bgImage={card.bgImage} title={card.title} text={card.text} />
                })}
            </div>
            <a href={'whatWeDo'}></a>
        </section>
    );
};
