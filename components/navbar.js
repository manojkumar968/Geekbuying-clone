let navbar=()=>{
    return `

    <div id="container">
    <div>
        <img id="tonavimg" src="https://img.gkbcdn.com/s3/bn/2205/1920x80-62709a2b2b40c92fe40c1661.jpg" alt="">
        <div id="secondnav">
            <div id="second1">
                <div id="iconmob"><i class="fa-thin fa-mobile"></i>
                </div>
                  
                        <div class="dropdown">
                            <span>Save BIG with Our app!</span>
                            <div class="dropdown-content">
                            <p>Get exclusive app deals and discounts, download our app & SAVE</p>
                            <div  id="barcode">
                                <div>
                                    <img src="https://content1.geekbuying.com/V1.4/en/images/index_images/android_app.png" alt="">
                                </div>
                                <div>
                                    <div><img src="https://content1.geekbuying.com/V1.4/en/images/index_images/app_store.jpg" alt=""></div>
                                    <div><img src="https://content1.geekbuying.com/V1.4/en/images/index_images/google_play.jpg" alt=""></div>
                                    <div><img src="https://content1.geekbuying.com/V1.4/en/images/index_images/gallery.jpg" alt=""></div>
                                    
                                  
                                </div>
                                
                            </div>
                            <h3>Go to mobile site</h3>
                            <!-- <img src="https://m.media-amazon.com/images/I/51yY07ZOhHL._AC_SY450_.jpg" alt=""> -->
                            </div>
                          </div>

                   
                    <!--  -->
                    
                   
                    <!-- <div>Language</div> -->
                    <div class="dropdown">
                        <span>Language</span>
                        <div class="dropdown-content1">
                            <p>English</p>
                        <p>Italiano</p>
                        <p>Deutsch</p>
                        <p>Español</p>
                        <p>Français</p>
                        <p>Português</p>
                        <p>Slovenčina</p>
                        <p>Magyar</p>
                        <p>Slovenščina</p>
                        <p>Lietuvių kalba</p>
                        <p>Svenska</p>
                        <p>Ελληνικά</p>
                        <p>Dansk</p>
                        <p>עברית</p>
                        <p>Hrvatski jezik</p>
                        <p>Polskie</p>
                        <p>Limba română</p>
                        <p>Čeština</p>
                        <p>Japanese</p>


                        </div>
                      </div>


                      
                     
                    <div id="navimg">

                        
                        <!-- <div>ship to</div> -->
                        <div class="dropdown">
                            <span>Ship to</span>
                            <div class="dropdown-content">
                           <h3>Select Regional Settings</h3>
                           <p>Ship to</p>
                          
                           <div id="country_select">
                               <img src="https://m.media-amazon.com/images/I/51yY07ZOhHL._AC_SY450_.jpg" alt="">
                               <p>India</p>
                               <select  class="dropbtn1" name="">
                                <br>
                                   
                                   <option value="">India</option>
                                   <option value="">United state</option>
                                   <option value="">United Kindom</option>
                                   <option value="">Itley</option>
                                   <option value="">France</option>
                                   <option value="">Span</option>
                                   <option value="">German</option>
                                   <option value="">Japan</option>
                                   <option value="">China</option>
                                   <option value="">Erope</option>

                               </select>
                           </div>
                           <p>Currency</p>
                           <div id="currency">
                               <p>INR=</p>
                               <select name="" id="">
                                   <div id="doller">
                                       <div>
                                           <p>Ruppes</p>
                                       </div>
                                       <div></div>
                                   </div>
                               </select>

                           </div>
                           <button id="save">Save</button>


                            </div>
                          </div>
                        <div><img src="https://m.media-amazon.com/images/I/51yY07ZOhHL._AC_SY450_.jpg" alt=""></div>
                      
                        <div> / INR</div>

                     
                        
                    </div>

                    <!-- <div> Support Center </div> -->
                    <div class="dropdown">
                        <span>Support Center</span>
                        <div class="dropdown-content">
                            <div>
                                <i class="fa-brands fa-rocketchat"></i>
                                <p> Live Chat</p>
                            </div>
                            <div>
                                <i class="fa-brands fa-rocketchat"></i>
                                <!-- <i class="fa-solid fa-arrow-up-right"></i> -->
                                <p>Ticket</p>
                            </div>
                            <div>
                                <i class="fa-brands fa-rocketchat"></i>
                                <!-- <i class="fa-solid fa-message-question"></i> -->
                                <p>Help Centre</p>
                            </div>
                       
                        </div>
                      </div>
            </div>

        </div>
        <hr>

    </div>
    
    <div id="hr1">
        <hr>
    </div>
   

    <div id="navbartwo">
        <div onclick="home()"><img src="./Images/logogeek.PNG" alt=""></div>
       
        <div class="dropdown2">
            <button onclick="myFunction()" class="dropbtn">All Categories</button>
            <div id="myDropdown" class="dropdown-content2">
            <div id="down">
                <div>
                    <a href="#">All Categories</a>
                    <a href="#">Smart Home & Garden</a>
                    <a href="#">Phones & Accessories</a>
                    <a href="#">Computers, Tablets & Accessories</a>
                    <a href="#">Wearable Devices</a>
                    <a href="#">Automobiles & Motorcycles</a>
                 
                 </div>
                 <div>
                    <a href="#">Sports & Outdoors</a>
                    <a href="#">Consumer Electronics</a>
                    <a href="#">TV Boxes & Mini PCs</a>
                    <a href="#">Toys & Hobbies</a>
                    <a href="#">Security System</a>
                    <a href="#">Fashion</a>
                   
                   
                 </div>
                 

            </div>
            </div>
          </div>

          <!-- search_bar -->
         


          <div>
               <input type="text" id="query" placeholder="search by keyboards">
          </div>
          <div>
                 <i class="fa-solid fa-magnifying-glass search"></i>
          </div>

          <a class="decarution" href="SignIn.html">
          <div id="user">
              <i class="fa-regular fa-user"></i>
          
            <p>sign in</p>
        
        </div></a>

        <a class="decarution" href="wishlistPage.html">
        <div id="wish">
        <i class="fa-regular fa-heart"></i>
       
           
           <p>wishlist</p>
       </div>
        </a>

       

        <a class="decarution" href="shoppingcart.html">
        <div id="cart">
        <i  class="fa-solid fa-bag-shopping"></i>
        <div><p id="show">0</p>
            <p>Cart</p>
        </div>
    </div></a>

     
          
    </div>


    <div id="shop">
        <div class="dropdown3">
            <span>Shop All Categories</span>
            <div class="dropdown-content3">
            <!-- <p>Local Warehouses</p> -->

          <!-- <div id="drp4"> -->
            <div class="dropdown4">
                <span>Local Warehouses</span>
                <div class="dropdown-content4">
                    <div id="drp4"> 
                        <div>
                            <h4>EU Warehouse</h4>
                        <p class="fade">EU Deals</p>
                        <h4>DE Warehouse</h4>
                        <p class="fade">DE Deals</p>
                        <h4>PL Warehouse</h4>
                        <h4>ES Warehouse</h4>
                        <p class="fade">EU Deals</p>
                        <h4>EU Warehouse</h4>
                        <p class="fade">ES Deals</p>
    
                        <h4>CZ Warehouse</h4>
                      
                        <h4>UK Warehouse</h4>
                        
                        <h4>EU-3 Warehouse</h4>
                        </div>
                        <div>
                            <img id="map" src="https://img.gkbcdn.com/s3/cim/category-1301-6ETJOmbg.png" alt="">
                        </div>
                    </div>
             
               
              
                </div>
            
              </div>
              
          <!-- </div> -->


            <p>Smart Home & Garden</p>
            <p>Sports & Outdoors</p>
            <p>Consumer Electronics</p>
            <p>TV Boxes & Mini PCs</p>
            <p>Computers, Tablets & Accessories</p>
            <p>Toys & Hobbies</p>
            <p>Phones & Accessories</p>
            <p>Automobiles & Motorcycles</p>
            <p>Wearable Devices</p>
            <p>Security Systems</p>
            <p>Fashion</p>
            </div>
     
          
          </div>
          <div>
            <div id="new">
                <a href="new.html">New</a>
            <a href="top-seller.html">Top seller</a>
            <a href="https://www.geekbuying.com/top_brand_at_geekbuying/">Brand</a>
            <a href="#">Clearance</a>
            <a href="#">Deals</a>
            <a href="#"> Bargain</a>
            <a href="coupon.html">Coupon</a>
          </div>
          </div>
    </div>

</div>
    
    `
}

export{navbar}