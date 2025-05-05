
let a = document.getElementsByClassName('up1')[0];
a.innerHTML= document.getElementsByClassName('date')[0].innerHTML;
let b = document.getElementsByClassName('up2')[0];
b.innerHTML= document.getElementsByClassName('date')[1].innerHTML;
let c = document.getElementsByClassName('up3')[0];
c.innerHTML= document.getElementsByClassName('date')[2].innerHTML;
function showOnly(month){
    if(month === 'all') window.location.href = 'index.html';
   switch (month) {
    case 'may': showMay(); break;
    case 'june': showJune(); break;
    case 'july': showJuly(); break;
    case 'august': showAugust();  break;
    
   }
}

function showMay(){
    document.getElementsByClassName('card-grid')[0].innerHTML =`
                    <div class="card">
                <div class="notify"></div>
                <div class="no">2</div>
                <div class="date">7 <sup>TH</sup>MAY 2025</div>
                <div class="theme">
                    <p class="theme-tag">THEME:</p>
                    <p class="theme-content">PATIENCE</p>
                </div>
                <div class="content minister">
                    <p class="minister-tag">MINISTER:</p>
                    <p class="minister-name">Peninah Wangari</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254746379023">0746379023</a> &nbsp;OR &nbsp;Whatsapp &nbsp;

                        <a href="https://wa.me/254746379023?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content programmer">
                    <p class="programmer-tag">PROGRAMMER:</p>
                    <p class="programmer-name">Samwel Kamau</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254758369379">+254758369379</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254758369379?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content devotional-lead">
                    <p class="dv-lead-tag">DEVOTIONAL LEAD:</p>
                    <p class="dv-lead-name">Mirriam Chemutai</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254703309568">+254703309568</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254703309568?text=Hi!%20Praise%20God">here</a></p>
                </div>
            </div>
            <div class="card">
                <div class="notify"></div>
                <div class="no">3</div>
                <div class="date">14 <sup>TH</sup>MAY 2025</div>
                <div class="theme">
                    <p class="theme-tag">THEME:</p>
                    <p class="theme-content">LIVING A BALANCED LIFE</p>
                </div>
                <div class="content minister">
                    <p class="minister-tag">MINISTER:</p>
                    <p class="minister-name">Jessy</p>
                    <p class="contact">
                        Call &nbsp;<a href="tel:+254707123668">+254707123668</a> &nbsp;OR  &nbsp;Whatsapp &nbsp
                        ;<a href="https://wa.me/254707123668?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content programmer">
                    <p class="programmer-tag">PROGRAMMER:</p>
                    <p class="programmer-name">Immaculate Njeri</p>
                    <p class="contact">Call &nbsp;<a href="tel:+25469631670">+25469631670</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/25469631670?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content devotional-lead">
                    <p class="dv-lead-tag">DEVOTIONAL LEAD:</p>
                    <p class="dv-lead-name">Sydney Wafula</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254715162108">0715162108</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254715162108?text=Hi!%20Praise%20God">here</a></p>
                </div>
            </div>
            <div class="card">
                <div class="notify"></div>
                <div class="no">4</div>
                <div class="date">21 <sup>TH</sup>MAY 2025</div>
                <div class="theme">
                    <p class="theme-tag">THEME:</p>
                    <p class="theme-content">PRAYER AND PETITION</p>
                </div>
                <div class="content minister">
                    <p class="minister-tag">MINISTER:</p>
                    <p class="minister-name">Lewis Njeru</p>
                    <p class="contact">
                        Call &nbsp;<a href="tel:+254741640418">+254741640418</a> &nbsp;OR &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254741640418?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content programmer">
                    <p class="programmer-tag">PROGRAMMER:</p>
                    <p class="programmer-name">Moses Mwaniki</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254742363957">+254742363957</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254742363957?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content devotional-lead">
                    <p class="dv-lead-tag">DEVOTIONAL LEAD:</p>
                    <p class="dv-lead-name">Betty Wachuka</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254111217054">+254111217054</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254111217054?text=Hi!%20Praise%20God">here</a></p>
                </div>
            </div>
            <div class="card">
                        <div class="card">
                <div class="notify"></div>
                <div class="no">5</div>
                <div class="date">28 <sup>TH</sup>MAY 2025</div>
                <div class="theme">
                    <p class="theme-tag">THEME:</p>
                    <p class="theme-content">HOLLINESS</p>
                </div>
                <div class="content minister">
                    <p class="minister-tag">MINISTER:</p>
                    <p class="minister-name">Derro</p>
                    <p class="contact">
                        Call &nbsp;<a href="tel:+254707653417">+254707653417</a> &nbsp;OR &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254707653417?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content programmer">
                    <p class="programmer-tag">PROGRAMMER:</p>
                    <p class="programmer-name">Purity Cherono</p>
                    <p class="contact">Call &nbsp;<a href="tel:+25496372171">+25496372171</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/25496372171?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content devotional-lead">
                    <p class="dv-lead-tag">DEVOTIONAL LEAD:</p>
                    <p class="dv-lead-name">Marion Ndanu</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254720656556">+254720656556</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254720656556?text=Hi!%20Praise%20God">here</a></p>
                </div>
            </div>
    `;
}
function showJune(){
    document.getElementsByClassName('card-grid')[0].innerHTML=`
                 <div class="card">
                <div class="notify"></div>
                <div class="no">6</div>
                <div class="date">4 <sup>TH</sup>JUNE 2025</div>
                <div class="theme">
                    <p class="theme-tag">THEME:</p>
                    <p class="theme-content">POWER OF WORDS</p>
                </div>
                <div class="content minister">
                    <p class="minister-tag">MINISTER:</p>
                    <p class="minister-name">Kakai Bonface</p>
                    <p class="contact">
                        Call &nbsp;<a href="tel:+254792044929">+254792044929</a> &nbsp;OR &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254792044929?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content programmer">
                    <p class="programmer-tag">PROGRAMMER:</p>
                    <p class="programmer-name">Joy Kerubo</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254718571522">+254718571522</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254718571522?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content devotional-lead">
                    <p class="dv-lead-tag">DEVOTIONAL LEAD:</p>
                    <p class="dv-lead-name">Faith Mutonya</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254703968903">+254703968903</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254703968903?text=Hi!%20Praise%20God">here</a></p>
                </div>
            </div>
            <div class="card">
                <div class="notify"></div>
                <div class="no">7</div>
                <div class="date">11 <sup>TH</sup>JUNE 2025</div>
                <div class="theme">
                    <p class="theme-tag">THEME:</p>
                    <p class="theme-content">HOPE IN CHRIST</p>
                </div>
                <div class="content minister">
                    <p class="minister-tag">MINISTER:</p>
                    <p class="minister-name">Moses Makenzi</p>
                    <p class="contact">
                        Call &nbsp;<a href="tel:+254741023957">+254741023957</a> &nbsp;OR &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254741023957?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content programmer">
                    <p class="programmer-tag">PROGRAMMER:</p>
                    <p class="programmer-name">Emmanuel Kipkorir</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254745439512">+254745439512</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254745439512?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content devotional-lead">
                    <p class="dv-lead-tag">DEVOTIONAL LEAD:</p>
                    <p class="dv-lead-name">Elena Mercy</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254113345356">+254113345356</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254113345356?text=Hi!%20Praise%20God">here</a></p>
                </div>
            </div>
            <div class="card">
            <div class="notify"></div>
            <div class="no">8</div>
            <div class="date">18 <sup>TH</sup>JUNE 2025</div>
            <div class="theme">
                <p class="theme-tag">THEME:</p>
                <p class="theme-content">DESTINY</p>
            </div>
            <div class="content minister">
                <p class="minister-tag">MINISTER:</p>
                <p class="minister-name">Mary Njambi</p>
                <p class="contact">
                    Call &nbsp;<a href="tel:+254790664086">+254790664086</a> &nbsp;OR &nbsp;Whatsapp &nbsp;
                    <a href="https://wa.me/254790664086?text=Hi!%20Praise%20God">here</a></p>
            </div>
            <div class="content programmer">
                <p class="programmer-tag">PROGRAMMER:</p>
                <p class="programmer-name">Elias Ndenda</p>
                <p class="contact">Call &nbsp;<a href="tel:+254700201241">+254700201241</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                    <a href="https://wa.me/254700201241?text=Hi!%20Praise%20God">here</a></p>
            </div>
            <div class="content devotional-lead">
                <p class="dv-lead-tag">DEVOTIONAL LEAD:</p>
                <p class="dv-lead-name">Henry Kinyati</p>
                <p class="contact">Call &nbsp;<a href="tel:+254741652218">+254741652218</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                    <a href="https://wa.me/254741652218?text=Hi!%20Praise%20God">here</a></p>
            </div>
            </div>
            <div class="card">
                <div class="notify"></div>
                <div class="no">9</div>
                <div class="date">25 <sup>TH</sup>JUNE 2025</div>
                <div class="theme">
                    <p class="theme-tag">THEME:</p>
                    <p class="theme-content">YOUR NETWORK YOUR NETWORTH</p>
                </div>
                <div class="content minister">
                    <p class="minister-tag">MINISTER:</p>
                    <p class="minister-name">Mercy Wambui</p>
                    <p class="contact">
                        Call &nbsp;<a href="tel:+254793983927">+254793983927</a> &nbsp;OR &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254793983927?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content programmer">
                    <p class="programmer-tag">PROGRAMMER:</p>
                    <p class="programmer-name">Warren Joseph</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254715726141">+254715726141</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254715726141?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content devotional-lead">
                    <p class="dv-lead-tag">DEVOTIONAL LEAD:</p>
                    <p class="dv-lead-name">Newton Kamau</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254757170288">+254757170288</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254757170288?text=Hi!%20Praise%20God">here</a></p>
                </div>
            </div>
    `;
}
function showJuly(){
    document.getElementsByClassName('card-grid')[0].innerHTML =`
                  <div class="card">
                <div class="notify"></div>
                <div class="no">10</div>
                <div class="date">9 <sup>TH</sup>JULY 2025</div>
                <div class="theme">
                    <p class="theme-tag">THEME:</p>
                    <p class="theme-content">INTIMACY</p>
                </div>
                <div class="content minister">
                    <p class="minister-tag">MINISTER:</p>
                    <p class="minister-name">Juma Frank</p>
                    <p class="contact">
                        Call &nbsp;<a href="tel:+254701871794">+254701871794</a> &nbsp;OR &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254701871794?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content programmer">
                    <p class="programmer-tag">PROGRAMMER:</p>
                    <p class="programmer-name">Alvin Kipkoech</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254111611590">+254111611590</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254111611590?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content devotional-lead">
                    <p class="dv-lead-tag">DEVOTIONAL LEAD:</p>
                    <p class="dv-lead-name">Annie David</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254784876687">+254784876687</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254784876687?text=Hi!%20Praise%20God">here</a></p>
                </div>
            </div>
            <div class="card">
                <div class="notify"></div>
                <div class="no">11</div>
                <div class="date">9 <sup>TH</sup>JULY 2025</div>
                <div class="theme">
                    <p class="theme-tag">THEME:</p>
                    <p class="theme-content">SELF ESTEEM</p>
                </div>
                <div class="content minister">
                    <p class="minister-tag">MINISTER:</p>
                    <p class="minister-name">Sharon Gathoni Anita</p>
                    <p class="contact">
                        Call &nbsp;<a href="tel:+254759169932">+254759169932</a> &nbsp;OR &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254759169932?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content programmer">
                    <p class="programmer-tag">PROGRAMMER:</p>
                    <p class="programmer-name">Maxwell Mutugi</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254718495178">+254718495178</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254718495178?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content devotional-lead">
                    <p class="dv-lead-tag">DEVOTIONAL LEAD:</p>
                    <p class="dv-lead-name">Esther Mungai</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254741892346">+254741892346</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254741892346?text=Hi!%20Praise%20God">here</a></p>
                </div>
            </div>
            <div class="card">
                <div class="notify"></div>
                <div class="no">12</div>
                <div class="date">16 <sup>TH</sup>JULY 2025</div>
                <div class="theme">
                    <p class="theme-tag">THEME:</p>
                    <p class="theme-content">CONSISTENCY AND DISCIPLINE</p>
                </div>
                <div class="content minister">
                    <p class="minister-tag">MINISTER:</p>
                    <p class="minister-name">Rose Kavinya</p>
                    <p class="contact">
                        Call &nbsp;<a href="tel:+254111415514">+254111415514</a> &nbsp;OR &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254111415514?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content programmer">
                    <p class="programmer-tag">PROGRAMMER:</p>
                    <p class="programmer-name">Sylvester Wanjohi</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254759467361">+254759467361</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254759467361?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content devotional-lead">
                    <p class="dv-lead-tag">DEVOTIONAL LEAD:</p>
                    <p class="dv-lead-name">Onesmas Kyalo</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254746049246">+254746049246</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254746049246?text=Hi!%20Praise%20God">here</a></p>
                </div>
            </div>
            <div class="card">
                <div class="notify"></div>
                <div class="no">13</div>
                <div class="date">23 <sup>TH</sup>JULY 2025</div>
                <div class="theme">
                    <p class="theme-tag">THEME:</p>
                    <p class="theme-content">LOVE</p>
                </div>
                <div class="content minister">
                    <p class="minister-tag">MINISTER:</p>
                    <p class="minister-name">Joel Smart</p>
                    <p class="contact">
                        Call &nbsp;<a href="tel:+254103610733">+254103610733</a> &nbsp;OR &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254103610733?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content programmer">
                    <p class="programmer-tag">PROGRAMMER:</p>
                    <p class="programmer-name">Olive Mawia</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254742956785">254742956785</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254742956785?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content devotional-lead">
                    <p class="dv-lead-tag">DEVOTIONAL LEAD:</p>
                    <p class="dv-lead-name">Linox Julius</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254717883052">+254717883052</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254717883052?text=Hi!%20Praise%20God">here</a></p>
                </div>
            </div>
            <div class="card">
                <div class="notify"></div>
                <div class="no">14</div>
                <div class="date">30 <sup>TH</sup>JULY 2025</div>
                <div class="theme">
                    <p class="theme-tag">THEME:</p>
                    <p class="theme-content">WISDOM</p>
                </div>
                <div class="content minister">
                    <p class="minister-tag">MINISTER:</p>
                    <p class="minister-name">Peter Kuria</p>
                    <p class="contact">
                        Call &nbsp;<a href="tel:+254112961056">+254112961056</a> &nbsp;OR &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254112961056?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content programmer">
                    <p class="programmer-tag">PROGRAMMER:</p>
                    <p class="programmer-name">Kennedy Mutua</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254101025193">+254101025193</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254101025193?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content devotional-lead">
                    <p class="dv-lead-tag">DEVOTIONAL LEAD:</p>
                    <p class="dv-lead-name">Cynthia Maina</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254704052921">+254704052921</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254704052921?text=Hi!%20Praise%20God">here</a></p>
                </div>
            </div>
    `;
}
function showAugust(){
    document.getElementsByClassName('card-grid')[0].innerHTML=`
                 <div class="card">
                <div class="notify"></div>
                <div class="no">15</div>
                <div class="date">6 <sup>TH</sup>AUGUST 2025</div>
                <div class="theme">
                    <p class="theme-tag">THEME:</p>
                    <p class="theme-content">FINANCIAL MANAGEMENT</p>
                </div>
                <div class="content minister">
                    <p class="minister-tag">MINISTER:</p>
                    <p class="minister-name">Moses Mshindi</p>
                    <p class="contact">
                        Call &nbsp;<a href="tel:+254740226504">+254740226504</a> &nbsp;OR &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254740226504?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content programmer">
                    <p class="programmer-tag">PROGRAMMER:</p>
                    <p class="programmer-name">Sharon Wandera</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254743999094">+254743999094</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254743999094?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content devotional-lead">
                    <p class="dv-lead-tag">DEVOTIONAL LEAD:</p>
                    <p class="dv-lead-name">Dennis Muuo</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254701526064">+254701526064</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254701526064?text=Hi!%20Praise%20God">here</a></p>
                </div>
            </div>
            <div class="card">
                <div class="notify"></div>
                <div class="no">16</div>
                <div class="date">13 <sup>TH</sup>AUGUST 2025</div>
                <div class="theme">
                    <p class="theme-tag">THEME:</p>
                    <p class="theme-content">THE POWER OF UNITY</p>
                </div>
                <div class="content minister">
                    <p class="minister-tag">MINISTER:</p>
                    <p class="minister-name">Stanely Kiruma</p>
                    <p class="contact">
                        Call &nbsp;<a href="tel:+254114825105">+254114825105</a> &nbsp;OR &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254114825105?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content programmer">
                    <p class="programmer-tag">PROGRAMMER:</p>
                    <p class="programmer-name">Victor Kazungu</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254795464994">+254795464994</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254795464994?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content devotional-lead">
                    <p class="dv-lead-tag">DEVOTIONAL LEAD:</p>
                    <p class="dv-lead-name">Jeremiah Ndiritu</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254745330996">+254745330996</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254745330996?text=Hi!%20Praise%20God">here</a></p>
                </div>
            </div>
            <div class="card">
                <div class="notify"></div>
                <div class="no">17</div>
                <div class="date">20 <sup>TH</sup>AUGUST 2025</div>
                <div class="theme">
                    <p class="theme-tag">THEME:</p>
                    <p class="theme-content">PURPOSE, RESILIENCE AND ASSIGNMENT</p>
                </div>
                <div class="content minister">
                    <p class="minister-tag">MINISTER:</p>
                    <p class="minister-name">Francis Kimani</p>
                    <p class="contact">
                        Call &nbsp;<a href="tel:+254794559822">+254794559822</a> &nbsp;OR &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254794559822?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content programmer">
                    <p class="programmer-tag">PROGRAMMER:</p>
                    <p class="programmer-name">Grace Mutanu</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254795621218">+254795621218</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254795621218?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content devotional-lead">
                    <p class="dv-lead-tag">DEVOTIONAL LEAD:</p>
                    <p class="dv-lead-name">Kenedy Mutua</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254101025193">254101025193</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254101025193?text=Hi!%20Praise%20God">here</a></p>
                </div>
            </div>
            <div class="card">
                <div class="notify"></div>
                <div class="no">18</div>
                <div class="date">27 <sup>TH</sup>AUGUST 2025</div>
                <div class="theme">
                    <p class="theme-tag">THEME:</p>
                    <p class="theme-content">GIVING</p>
                </div>
                <div class="content minister">
                    <p class="minister-tag">MINISTER:</p>
                    <p class="minister-name">Steve Njuguna</p>
                    <p class="contact">
                        Call &nbsp;<a href="tel:+254718528726">+254718528726</a> &nbsp;OR &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254718528726?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content programmer">
                    <p class="programmer-tag">PROGRAMMER:</p>
                    <p class="programmer-name">Caleb Maina</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254710308428">+254710308428</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254710308428?text=Hi!%20Praise%20God">here</a></p>
                </div>
                <div class="content devotional-lead">
                    <p class="dv-lead-tag">DEVOTIONAL LEAD:</p>
                    <p class="dv-lead-name">Emmaculate Mwikali</p>
                    <p class="contact">Call &nbsp;<a href="tel:+254725216541">+254725216541</a> &nbsp;OR  &nbsp;Whatsapp &nbsp;
                        <a href="https://wa.me/254725216541?text=Hi!%20Praise%20God">here</a></p>
                </div>
            </div>
    `;
}
