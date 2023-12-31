import { useTranslation } from 'react-i18next';
import '../../i18n';
import React from 'react';


function TermsPage () {
    const { t } = useTranslation();

    return(
        <div className='terms'>
            <div className='terms__header'>
                <h1 className='terms__title'>{t('terms')}</h1>
            </div>
            <p className='terms__body'>{t('terms and conditions body')}</p>

        </div>
    );
}

export default TermsPage;