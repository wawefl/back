'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">wawefl-back documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AdminModule-ffc5b27ca1eb5abeef944005c9666e8b92b9c1650273ca2626d452ffae88aa14081786e480065d9c0c01693c3ca1cc0a4173179bedffb41a509e3155a0d0a1af"' : 'data-bs-target="#xs-controllers-links-module-AdminModule-ffc5b27ca1eb5abeef944005c9666e8b92b9c1650273ca2626d452ffae88aa14081786e480065d9c0c01693c3ca1cc0a4173179bedffb41a509e3155a0d0a1af"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AdminModule-ffc5b27ca1eb5abeef944005c9666e8b92b9c1650273ca2626d452ffae88aa14081786e480065d9c0c01693c3ca1cc0a4173179bedffb41a509e3155a0d0a1af"' :
                                            'id="xs-controllers-links-module-AdminModule-ffc5b27ca1eb5abeef944005c9666e8b92b9c1650273ca2626d452ffae88aa14081786e480065d9c0c01693c3ca1cc0a4173179bedffb41a509e3155a0d0a1af"' }>
                                            <li class="link">
                                                <a href="controllers/AdminController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AdminModule-ffc5b27ca1eb5abeef944005c9666e8b92b9c1650273ca2626d452ffae88aa14081786e480065d9c0c01693c3ca1cc0a4173179bedffb41a509e3155a0d0a1af"' : 'data-bs-target="#xs-injectables-links-module-AdminModule-ffc5b27ca1eb5abeef944005c9666e8b92b9c1650273ca2626d452ffae88aa14081786e480065d9c0c01693c3ca1cc0a4173179bedffb41a509e3155a0d0a1af"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminModule-ffc5b27ca1eb5abeef944005c9666e8b92b9c1650273ca2626d452ffae88aa14081786e480065d9c0c01693c3ca1cc0a4173179bedffb41a509e3155a0d0a1af"' :
                                        'id="xs-injectables-links-module-AdminModule-ffc5b27ca1eb5abeef944005c9666e8b92b9c1650273ca2626d452ffae88aa14081786e480065d9c0c01693c3ca1cc0a4173179bedffb41a509e3155a0d0a1af"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StudentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-7d1f98d71a30a143704c4a082ce2518f45121796c91c2e04af7652a1d5237bf01ec89cab3a4ad4aa217027a94bfc67552dab9cde37fd208f95fb3a573bb4ddfc"' : 'data-bs-target="#xs-controllers-links-module-AppModule-7d1f98d71a30a143704c4a082ce2518f45121796c91c2e04af7652a1d5237bf01ec89cab3a4ad4aa217027a94bfc67552dab9cde37fd208f95fb3a573bb4ddfc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-7d1f98d71a30a143704c4a082ce2518f45121796c91c2e04af7652a1d5237bf01ec89cab3a4ad4aa217027a94bfc67552dab9cde37fd208f95fb3a573bb4ddfc"' :
                                            'id="xs-controllers-links-module-AppModule-7d1f98d71a30a143704c4a082ce2518f45121796c91c2e04af7652a1d5237bf01ec89cab3a4ad4aa217027a94bfc67552dab9cde37fd208f95fb3a573bb4ddfc"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-7d1f98d71a30a143704c4a082ce2518f45121796c91c2e04af7652a1d5237bf01ec89cab3a4ad4aa217027a94bfc67552dab9cde37fd208f95fb3a573bb4ddfc"' : 'data-bs-target="#xs-injectables-links-module-AppModule-7d1f98d71a30a143704c4a082ce2518f45121796c91c2e04af7652a1d5237bf01ec89cab3a4ad4aa217027a94bfc67552dab9cde37fd208f95fb3a573bb4ddfc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-7d1f98d71a30a143704c4a082ce2518f45121796c91c2e04af7652a1d5237bf01ec89cab3a4ad4aa217027a94bfc67552dab9cde37fd208f95fb3a573bb4ddfc"' :
                                        'id="xs-injectables-links-module-AppModule-7d1f98d71a30a143704c4a082ce2518f45121796c91c2e04af7652a1d5237bf01ec89cab3a4ad4aa217027a94bfc67552dab9cde37fd208f95fb3a573bb4ddfc"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthAdminModule.html" data-type="entity-link" >AuthAdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthAdminModule-5c26b7d8855fbee2aea45309b4b2dbc98230cb4358c9e1f43466bf8791c4156828586e041b714c5eaf99d99228e9544bfa9f6baefcd8ed003c1a7571435ce906"' : 'data-bs-target="#xs-controllers-links-module-AuthAdminModule-5c26b7d8855fbee2aea45309b4b2dbc98230cb4358c9e1f43466bf8791c4156828586e041b714c5eaf99d99228e9544bfa9f6baefcd8ed003c1a7571435ce906"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthAdminModule-5c26b7d8855fbee2aea45309b4b2dbc98230cb4358c9e1f43466bf8791c4156828586e041b714c5eaf99d99228e9544bfa9f6baefcd8ed003c1a7571435ce906"' :
                                            'id="xs-controllers-links-module-AuthAdminModule-5c26b7d8855fbee2aea45309b4b2dbc98230cb4358c9e1f43466bf8791c4156828586e041b714c5eaf99d99228e9544bfa9f6baefcd8ed003c1a7571435ce906"' }>
                                            <li class="link">
                                                <a href="controllers/AuthAdminController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthAdminController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthAdminModule-5c26b7d8855fbee2aea45309b4b2dbc98230cb4358c9e1f43466bf8791c4156828586e041b714c5eaf99d99228e9544bfa9f6baefcd8ed003c1a7571435ce906"' : 'data-bs-target="#xs-injectables-links-module-AuthAdminModule-5c26b7d8855fbee2aea45309b4b2dbc98230cb4358c9e1f43466bf8791c4156828586e041b714c5eaf99d99228e9544bfa9f6baefcd8ed003c1a7571435ce906"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthAdminModule-5c26b7d8855fbee2aea45309b4b2dbc98230cb4358c9e1f43466bf8791c4156828586e041b714c5eaf99d99228e9544bfa9f6baefcd8ed003c1a7571435ce906"' :
                                        'id="xs-injectables-links-module-AuthAdminModule-5c26b7d8855fbee2aea45309b4b2dbc98230cb4358c9e1f43466bf8791c4156828586e041b714c5eaf99d99228e9544bfa9f6baefcd8ed003c1a7571435ce906"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtAdminStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtAdminStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StudentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-caed8d31eaef29792d5ed2c311b8ce5154a5ce0095694e88bba5833bdca93f73b4a27d599fdaf3a19c34401495eb241b8f512f663b2b881a82af20bcb61e195d"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-caed8d31eaef29792d5ed2c311b8ce5154a5ce0095694e88bba5833bdca93f73b4a27d599fdaf3a19c34401495eb241b8f512f663b2b881a82af20bcb61e195d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-caed8d31eaef29792d5ed2c311b8ce5154a5ce0095694e88bba5833bdca93f73b4a27d599fdaf3a19c34401495eb241b8f512f663b2b881a82af20bcb61e195d"' :
                                            'id="xs-controllers-links-module-AuthModule-caed8d31eaef29792d5ed2c311b8ce5154a5ce0095694e88bba5833bdca93f73b4a27d599fdaf3a19c34401495eb241b8f512f663b2b881a82af20bcb61e195d"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-caed8d31eaef29792d5ed2c311b8ce5154a5ce0095694e88bba5833bdca93f73b4a27d599fdaf3a19c34401495eb241b8f512f663b2b881a82af20bcb61e195d"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-caed8d31eaef29792d5ed2c311b8ce5154a5ce0095694e88bba5833bdca93f73b4a27d599fdaf3a19c34401495eb241b8f512f663b2b881a82af20bcb61e195d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-caed8d31eaef29792d5ed2c311b8ce5154a5ce0095694e88bba5833bdca93f73b4a27d599fdaf3a19c34401495eb241b8f512f663b2b881a82af20bcb61e195d"' :
                                        'id="xs-injectables-links-module-AuthModule-caed8d31eaef29792d5ed2c311b8ce5154a5ce0095694e88bba5833bdca93f73b4a27d599fdaf3a19c34401495eb241b8f512f663b2b881a82af20bcb61e195d"' }>
                                        <li class="link">
                                            <a href="injectables/AuthSService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthSService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthStudentModule.html" data-type="entity-link" >AuthStudentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthStudentModule-4d6aaa3da7eede68e09143ef089ecc34cb6c5ac18266ac45336c8eed64ce208e8f0c089ec86e54ad7d4f5cc48b14552570742a576e02503fe046a35322795a59"' : 'data-bs-target="#xs-controllers-links-module-AuthStudentModule-4d6aaa3da7eede68e09143ef089ecc34cb6c5ac18266ac45336c8eed64ce208e8f0c089ec86e54ad7d4f5cc48b14552570742a576e02503fe046a35322795a59"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthStudentModule-4d6aaa3da7eede68e09143ef089ecc34cb6c5ac18266ac45336c8eed64ce208e8f0c089ec86e54ad7d4f5cc48b14552570742a576e02503fe046a35322795a59"' :
                                            'id="xs-controllers-links-module-AuthStudentModule-4d6aaa3da7eede68e09143ef089ecc34cb6c5ac18266ac45336c8eed64ce208e8f0c089ec86e54ad7d4f5cc48b14552570742a576e02503fe046a35322795a59"' }>
                                            <li class="link">
                                                <a href="controllers/AuthStudentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthStudentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthStudentModule-4d6aaa3da7eede68e09143ef089ecc34cb6c5ac18266ac45336c8eed64ce208e8f0c089ec86e54ad7d4f5cc48b14552570742a576e02503fe046a35322795a59"' : 'data-bs-target="#xs-injectables-links-module-AuthStudentModule-4d6aaa3da7eede68e09143ef089ecc34cb6c5ac18266ac45336c8eed64ce208e8f0c089ec86e54ad7d4f5cc48b14552570742a576e02503fe046a35322795a59"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthStudentModule-4d6aaa3da7eede68e09143ef089ecc34cb6c5ac18266ac45336c8eed64ce208e8f0c089ec86e54ad7d4f5cc48b14552570742a576e02503fe046a35322795a59"' :
                                        'id="xs-injectables-links-module-AuthStudentModule-4d6aaa3da7eede68e09143ef089ecc34cb6c5ac18266ac45336c8eed64ce208e8f0c089ec86e54ad7d4f5cc48b14552570742a576e02503fe046a35322795a59"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStudentStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStudentStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StudentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GradeModule.html" data-type="entity-link" >GradeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-GradeModule-07d751621821c53ff3e83df49acde119c29cb886448a403ded066277801f16db3d41b33961034991bac1fbd24c415d5c7e93bc441748e102ada1f787f647352a"' : 'data-bs-target="#xs-controllers-links-module-GradeModule-07d751621821c53ff3e83df49acde119c29cb886448a403ded066277801f16db3d41b33961034991bac1fbd24c415d5c7e93bc441748e102ada1f787f647352a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GradeModule-07d751621821c53ff3e83df49acde119c29cb886448a403ded066277801f16db3d41b33961034991bac1fbd24c415d5c7e93bc441748e102ada1f787f647352a"' :
                                            'id="xs-controllers-links-module-GradeModule-07d751621821c53ff3e83df49acde119c29cb886448a403ded066277801f16db3d41b33961034991bac1fbd24c415d5c7e93bc441748e102ada1f787f647352a"' }>
                                            <li class="link">
                                                <a href="controllers/GradeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GradeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-GradeModule-07d751621821c53ff3e83df49acde119c29cb886448a403ded066277801f16db3d41b33961034991bac1fbd24c415d5c7e93bc441748e102ada1f787f647352a"' : 'data-bs-target="#xs-injectables-links-module-GradeModule-07d751621821c53ff3e83df49acde119c29cb886448a403ded066277801f16db3d41b33961034991bac1fbd24c415d5c7e93bc441748e102ada1f787f647352a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GradeModule-07d751621821c53ff3e83df49acde119c29cb886448a403ded066277801f16db3d41b33961034991bac1fbd24c415d5c7e93bc441748e102ada1f787f647352a"' :
                                        'id="xs-injectables-links-module-GradeModule-07d751621821c53ff3e83df49acde119c29cb886448a403ded066277801f16db3d41b33961034991bac1fbd24c415d5c7e93bc441748e102ada1f787f647352a"' }>
                                        <li class="link">
                                            <a href="injectables/GradeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GradeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LessonAdminModule.html" data-type="entity-link" >LessonAdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-LessonAdminModule-fab266d3b07a7ed33fc3bc6879572e4b0be4bbed21fa7b78506acff9c590f6f22e2cf4f7bafe33d268401ca16e8e9cd5d1f5841402a6acd38bdc894e49c3bea8"' : 'data-bs-target="#xs-controllers-links-module-LessonAdminModule-fab266d3b07a7ed33fc3bc6879572e4b0be4bbed21fa7b78506acff9c590f6f22e2cf4f7bafe33d268401ca16e8e9cd5d1f5841402a6acd38bdc894e49c3bea8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LessonAdminModule-fab266d3b07a7ed33fc3bc6879572e4b0be4bbed21fa7b78506acff9c590f6f22e2cf4f7bafe33d268401ca16e8e9cd5d1f5841402a6acd38bdc894e49c3bea8"' :
                                            'id="xs-controllers-links-module-LessonAdminModule-fab266d3b07a7ed33fc3bc6879572e4b0be4bbed21fa7b78506acff9c590f6f22e2cf4f7bafe33d268401ca16e8e9cd5d1f5841402a6acd38bdc894e49c3bea8"' }>
                                            <li class="link">
                                                <a href="controllers/LessonAdminController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LessonAdminController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LessonAdminModule-fab266d3b07a7ed33fc3bc6879572e4b0be4bbed21fa7b78506acff9c590f6f22e2cf4f7bafe33d268401ca16e8e9cd5d1f5841402a6acd38bdc894e49c3bea8"' : 'data-bs-target="#xs-injectables-links-module-LessonAdminModule-fab266d3b07a7ed33fc3bc6879572e4b0be4bbed21fa7b78506acff9c590f6f22e2cf4f7bafe33d268401ca16e8e9cd5d1f5841402a6acd38bdc894e49c3bea8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LessonAdminModule-fab266d3b07a7ed33fc3bc6879572e4b0be4bbed21fa7b78506acff9c590f6f22e2cf4f7bafe33d268401ca16e8e9cd5d1f5841402a6acd38bdc894e49c3bea8"' :
                                        'id="xs-injectables-links-module-LessonAdminModule-fab266d3b07a7ed33fc3bc6879572e4b0be4bbed21fa7b78506acff9c590f6f22e2cf4f7bafe33d268401ca16e8e9cd5d1f5841402a6acd38bdc894e49c3bea8"' }>
                                        <li class="link">
                                            <a href="injectables/LessonService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LessonService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LessonStudentModule.html" data-type="entity-link" >LessonStudentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-LessonStudentModule-d79c6e004bb4b075c93f31c5aa4de764ae5dc93deca00c4402ad86e838acbb2ff8c07e250b72522225d78254664e4057c27fd77f22114184452134ca02cd0ec6"' : 'data-bs-target="#xs-controllers-links-module-LessonStudentModule-d79c6e004bb4b075c93f31c5aa4de764ae5dc93deca00c4402ad86e838acbb2ff8c07e250b72522225d78254664e4057c27fd77f22114184452134ca02cd0ec6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LessonStudentModule-d79c6e004bb4b075c93f31c5aa4de764ae5dc93deca00c4402ad86e838acbb2ff8c07e250b72522225d78254664e4057c27fd77f22114184452134ca02cd0ec6"' :
                                            'id="xs-controllers-links-module-LessonStudentModule-d79c6e004bb4b075c93f31c5aa4de764ae5dc93deca00c4402ad86e838acbb2ff8c07e250b72522225d78254664e4057c27fd77f22114184452134ca02cd0ec6"' }>
                                            <li class="link">
                                                <a href="controllers/LessonStudentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LessonStudentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LessonStudentModule-d79c6e004bb4b075c93f31c5aa4de764ae5dc93deca00c4402ad86e838acbb2ff8c07e250b72522225d78254664e4057c27fd77f22114184452134ca02cd0ec6"' : 'data-bs-target="#xs-injectables-links-module-LessonStudentModule-d79c6e004bb4b075c93f31c5aa4de764ae5dc93deca00c4402ad86e838acbb2ff8c07e250b72522225d78254664e4057c27fd77f22114184452134ca02cd0ec6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LessonStudentModule-d79c6e004bb4b075c93f31c5aa4de764ae5dc93deca00c4402ad86e838acbb2ff8c07e250b72522225d78254664e4057c27fd77f22114184452134ca02cd0ec6"' :
                                        'id="xs-injectables-links-module-LessonStudentModule-d79c6e004bb4b075c93f31c5aa4de764ae5dc93deca00c4402ad86e838acbb2ff8c07e250b72522225d78254664e4057c27fd77f22114184452134ca02cd0ec6"' }>
                                        <li class="link">
                                            <a href="injectables/LessonService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LessonService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' :
                                        'id="xs-injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SchoolModule.html" data-type="entity-link" >SchoolModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SchoolModule-3e8adcda51fcc704b49223814135c9f7bd1dd5bb3144516a4cdc92819eb05e0bd2d91b83a2221714c5fe9b6e96b602e3172d4e676f3f742ed2924a02f2b48905"' : 'data-bs-target="#xs-controllers-links-module-SchoolModule-3e8adcda51fcc704b49223814135c9f7bd1dd5bb3144516a4cdc92819eb05e0bd2d91b83a2221714c5fe9b6e96b602e3172d4e676f3f742ed2924a02f2b48905"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SchoolModule-3e8adcda51fcc704b49223814135c9f7bd1dd5bb3144516a4cdc92819eb05e0bd2d91b83a2221714c5fe9b6e96b602e3172d4e676f3f742ed2924a02f2b48905"' :
                                            'id="xs-controllers-links-module-SchoolModule-3e8adcda51fcc704b49223814135c9f7bd1dd5bb3144516a4cdc92819eb05e0bd2d91b83a2221714c5fe9b6e96b602e3172d4e676f3f742ed2924a02f2b48905"' }>
                                            <li class="link">
                                                <a href="controllers/SchoolController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SchoolModule-3e8adcda51fcc704b49223814135c9f7bd1dd5bb3144516a4cdc92819eb05e0bd2d91b83a2221714c5fe9b6e96b602e3172d4e676f3f742ed2924a02f2b48905"' : 'data-bs-target="#xs-injectables-links-module-SchoolModule-3e8adcda51fcc704b49223814135c9f7bd1dd5bb3144516a4cdc92819eb05e0bd2d91b83a2221714c5fe9b6e96b602e3172d4e676f3f742ed2924a02f2b48905"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SchoolModule-3e8adcda51fcc704b49223814135c9f7bd1dd5bb3144516a4cdc92819eb05e0bd2d91b83a2221714c5fe9b6e96b602e3172d4e676f3f742ed2924a02f2b48905"' :
                                        'id="xs-injectables-links-module-SchoolModule-3e8adcda51fcc704b49223814135c9f7bd1dd5bb3144516a4cdc92819eb05e0bd2d91b83a2221714c5fe9b6e96b602e3172d4e676f3f742ed2924a02f2b48905"' }>
                                        <li class="link">
                                            <a href="injectables/SchoolService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StudentAdminModule.html" data-type="entity-link" >StudentAdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-StudentAdminModule-40ddf66cec179020a5b5eaedcf40d0c5f353dc95c4393f5c2d461f0fc88f358d1c418d7fb5858131007b5a968e54dbba955a8a1ef44b69ad1c628139b9d97803"' : 'data-bs-target="#xs-controllers-links-module-StudentAdminModule-40ddf66cec179020a5b5eaedcf40d0c5f353dc95c4393f5c2d461f0fc88f358d1c418d7fb5858131007b5a968e54dbba955a8a1ef44b69ad1c628139b9d97803"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StudentAdminModule-40ddf66cec179020a5b5eaedcf40d0c5f353dc95c4393f5c2d461f0fc88f358d1c418d7fb5858131007b5a968e54dbba955a8a1ef44b69ad1c628139b9d97803"' :
                                            'id="xs-controllers-links-module-StudentAdminModule-40ddf66cec179020a5b5eaedcf40d0c5f353dc95c4393f5c2d461f0fc88f358d1c418d7fb5858131007b5a968e54dbba955a8a1ef44b69ad1c628139b9d97803"' }>
                                            <li class="link">
                                                <a href="controllers/StudentAdminController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentAdminController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-StudentAdminModule-40ddf66cec179020a5b5eaedcf40d0c5f353dc95c4393f5c2d461f0fc88f358d1c418d7fb5858131007b5a968e54dbba955a8a1ef44b69ad1c628139b9d97803"' : 'data-bs-target="#xs-injectables-links-module-StudentAdminModule-40ddf66cec179020a5b5eaedcf40d0c5f353dc95c4393f5c2d461f0fc88f358d1c418d7fb5858131007b5a968e54dbba955a8a1ef44b69ad1c628139b9d97803"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StudentAdminModule-40ddf66cec179020a5b5eaedcf40d0c5f353dc95c4393f5c2d461f0fc88f358d1c418d7fb5858131007b5a968e54dbba955a8a1ef44b69ad1c628139b9d97803"' :
                                        'id="xs-injectables-links-module-StudentAdminModule-40ddf66cec179020a5b5eaedcf40d0c5f353dc95c4393f5c2d461f0fc88f358d1c418d7fb5858131007b5a968e54dbba955a8a1ef44b69ad1c628139b9d97803"' }>
                                        <li class="link">
                                            <a href="injectables/StudentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StudentModule.html" data-type="entity-link" >StudentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-StudentModule-fcfbca76816d950dd846d6d9d5a5aac04c844facf3b156c0022beda4afaf2f46ed3272e564666b44060bf363a354ab71c6017235959b663eb3e03a3830e0e96b"' : 'data-bs-target="#xs-controllers-links-module-StudentModule-fcfbca76816d950dd846d6d9d5a5aac04c844facf3b156c0022beda4afaf2f46ed3272e564666b44060bf363a354ab71c6017235959b663eb3e03a3830e0e96b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StudentModule-fcfbca76816d950dd846d6d9d5a5aac04c844facf3b156c0022beda4afaf2f46ed3272e564666b44060bf363a354ab71c6017235959b663eb3e03a3830e0e96b"' :
                                            'id="xs-controllers-links-module-StudentModule-fcfbca76816d950dd846d6d9d5a5aac04c844facf3b156c0022beda4afaf2f46ed3272e564666b44060bf363a354ab71c6017235959b663eb3e03a3830e0e96b"' }>
                                            <li class="link">
                                                <a href="controllers/StudentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-StudentModule-fcfbca76816d950dd846d6d9d5a5aac04c844facf3b156c0022beda4afaf2f46ed3272e564666b44060bf363a354ab71c6017235959b663eb3e03a3830e0e96b"' : 'data-bs-target="#xs-injectables-links-module-StudentModule-fcfbca76816d950dd846d6d9d5a5aac04c844facf3b156c0022beda4afaf2f46ed3272e564666b44060bf363a354ab71c6017235959b663eb3e03a3830e0e96b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StudentModule-fcfbca76816d950dd846d6d9d5a5aac04c844facf3b156c0022beda4afaf2f46ed3272e564666b44060bf363a354ab71c6017235959b663eb3e03a3830e0e96b"' :
                                        'id="xs-injectables-links-module-StudentModule-fcfbca76816d950dd846d6d9d5a5aac04c844facf3b156c0022beda4afaf2f46ed3272e564666b44060bf363a354ab71c6017235959b663eb3e03a3830e0e96b"' }>
                                        <li class="link">
                                            <a href="injectables/StudentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/RegisterDTO.html" data-type="entity-link" >RegisterDTO</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AdminService.html" data-type="entity-link" >AdminService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GradeService.html" data-type="entity-link" >GradeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAdminGuard.html" data-type="entity-link" >JwtAdminGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStudentGuard.html" data-type="entity-link" >JwtStudentGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LessonService.html" data-type="entity-link" >LessonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SchoolService.html" data-type="entity-link" >SchoolService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StudentService.html" data-type="entity-link" >StudentService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});