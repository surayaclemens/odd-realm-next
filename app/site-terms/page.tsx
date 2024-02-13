import { useTranslation } from 'react-i18next';
// very weird error where this import is causing errors only for this page
// import '../../i18n';
import React from 'react';


function SiteTermsPage () {
    // const { t } = useTranslation();

    return(
        <div className='flex min-h-screen flex-col px-8 lg:px-28 py-8 lg:py-36 font-sans text-black'>
            <h3 className='text-md uppercase my-2 lg:text-8xl lg:normal-case'>Terms & Conditions</h3>
            <p className='text-md lg:text-lg'>terms and conditions body</p>

        </div>
    );
}

export default SiteTermsPage;