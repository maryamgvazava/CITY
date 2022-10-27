var main1 = document.querySelector(".main1")
var topdiv = document.querySelector(".topdiv")
var main = document.querySelector(".main")
var searchclick = document.querySelector(".searchclick")
var inp = document.createElement("input")
inp.classList.add("serchinp")
var serchinp = document.querySelectorAll (".serchinp")
var btn = document.createElement("button")
btn.classList.add("search")
var search = document.querySelector(".search")
searchclick.appendChild(inp)
searchclick.appendChild(btn)
btn.innerText = "Search"


var sortbtn = document.createElement("button")
sortbtn.classList.add("sort")
var sort = document.querySelector(".sort")
topdiv.appendChild(sortbtn)
sortbtn.innerText = "Sort A-Z"


class Places {
    constructor(PlaceName, continent, Img, description, price){
        this.PlaceName = PlaceName
        this.continent = continent
        this.Img = Img
        this.description = description
        this.price = price

    }
}

var India = new Places ("india", "Asia", "https://cdn.mos.cms.futurecdn.net/3FnczamRyWU6MvRMEXWaGD.jpg" , "most visited place", "$800");
var emirates = new Places ("United Arab Emirates", "Asia", "https://www.state.gov/wp-content/uploads/2019/04/UAE-2109x1406.jpg", "most visited place", "$1200");
var Vietnam = new Places ("Vietnam", "Asia", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a3/2a/f2/big-hand-ang-golden-bridge.jpg?w=600&h=400&s=1","most visited place", "$1200");
var Tajikistan = new Places ("Tajikistan", "Asia", "https://www.travelanddestinations.com/wp-content/uploads/2019/11/Fann-Mountains-Lake-Tajikistan.jpg","most visited place", "$1100");
var Israel = new Places ("Israel", "Asia", "https://i.natgeofe.com/n/efa8dd41-0cba-48eb-8598-562fe74884df/israel-travel.jpg","most visited place", "$900");
var Iran = new Places ("Iran", "Asia", "https://upload.wikimedia.org/wikipedia/commons/0/07/North_Tehran_Towers.jpg","most visited place", "$700");
var Thailand = new Places ("Thailand", "Asia", "https://lp-cms-production.imgix.net/2021-03/GettyRF_178111904.jpg","most visited place", "$1600");
var Malaysia = new Places ("Malaysia", "Asia", "https://cms.finnair.com/resource/blob/754668/7c78fe16dafcffe7673ac1aa0fd9db43/malaysia-picture-data.jpg","most visited place",  "$1800");
var Nepal = new Places ("Nepal", "Asia", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/d6/96/36/photo4jpg.jpg?w=700&h=-1&s=1","most visited place", "$1300");
var Bangladesh = new Places ("Bangladesh", "Asia", "https://i0.wp.com/www.eurasiareview.com/wp-content/uploads/2015/08/Dhaka-Bangladesh.jpg?fit=825%2C510&ssl=1", "most visited place","$1200");
var 	China = new Places ("China", "Asia", "https://www.state.gov/wp-content/uploads/2019/04/China-2107x1406.jpg", "most visited place", "$2200");
var 	Japan = new Places ("Japan", "Asia", "https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg", "most visited place", "$1200");
var Philippines = new Places ("Philippines", "Asia", "https://lp-cms-production.imgix.net/image_browser/Entalula_Island_beach_El_Nido_G.jpg","most visited place", "$1200");
var Cyprus = new Places ("Cyprus", "Asia", "https://thenomadvisor.com/wp-content/uploads/2020/12/wheretostayincyprus.jpg", "most visited place", "$1200");
var Azerbaijan = new Places ("Azerbaijan", "Asia", "https://www.nationsonline.org/gallery/Azerbaijan/Flame-Towers-Baku.jpg","most visited place", "$1200");
var Singapore = new Places ("Singapore", "Asia", "https://lp-cms-production.imgix.net/2021-10/nature-park-travel-landmark-tourist-landscapes-gardens-by-the-bay-singapore-marina-bay-singapore_t20_Xx3KmVCROPPED.jpg", "most visited place","$1200");
var Kuwait = new Places ("Kuwait", "Asia", "https://assets.weforum.org/community/image/_d3HXBxBEPLd6VC_uDHN8d8uom51Mrj2bIsmExx7qvM.jpg", "most visited place","$1200");
var Turkey = new Places ("Turkey", "Asia", "https://images.lbc.co.uk/images/308953?crop=16_9&width=660&relax=1&signature=NWoy-Ofslg3S2h1X1gVo2oIMROc=", "most visited place","$1200");

var Hungary = new Places ("Hungary", "Europe", "https://a.cdn-hotels.com/gdcs/production117/d386/a26bbd16-8a89-41ba-8a3f-f291a003e054.jpg?impolicy=fcrop&w=800&h=533&q=medium","most visited place", "$1200");
var Austria = new Places ("Austria", "Europe", "https://lp-cms-production.imgix.net/2021-11/GettyImages-910960082.jpg?auto=format&q=40&ar=16%3A9&fit=crop","most visited place", "$1200");
var Switzerland = new Places ("Switzerland", "Europe", "https://cdn.britannica.com/34/102134-050-6DE65DE1/La-Gruyere-district-Fribourg-canton-Switzerland.jpg","most visited place", "$1200");
var Germany = new Places ("Germany", "Europe", "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/21/9a/2d.jpg","most visited place", "$1200");
var Bulgaria = new Places ("Bulgaria", "Europe", "https://static.euronews.com/articles/stories/06/28/82/20/1440x810_cmsv2_ba880cd0-93ce-5e33-8e1e-f64dff1d92c2-6288220.jpg","most visited place", "$1200");
var France = new Places ("France", "Europe", "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/10/05/thumbs/800x531/149803.jpg","most visited place", "$1200");
var UnitedKingdom = new Places ("United Kingdom", "Europe", "https://cdn.kimkim.com/files/a/images/f2939dd7a5eddd79ad691d50cdb482df5c165837/original-ee8ff466e049d061137036f86a637f93.jpg","most visited place", "$1200");
var Italy = new Places ("Italy", "Europe", "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1257553494.jpg?crop=0.670xw:1.00xh;0.0481xw,0&resize=640:*","most visited place", "$1200");
var Denmark = new Places ("Denmark", "Europe", "https://i.natgeofe.com/k/c4b51a61-ac20-4b96-a52a-609ab6576a4e/denmark-copenhagen-canal_16x9.jpg?w=1200","most visited place", "$1200");
var Finland = new Places ("Finland", "Europe", "https://imageio.forbes.com/specials-images/imageserve/620ca273d9db9336241d67d9/Fantastic-landscape-of-Finland-with-northern-lights-/960x0.jpg?format=jpg&width=960","most visited place", "$1200");
var Moldova = new Places ("Moldova", "Europe", "https://www.nationsonline.org/gallery/Moldova/Old-Orhei-Moldova.jpg","most visited place", "$1200");
var Iceland = new Places ("Iceland", "Europe", "https://cdn.sanity.io/images/a1l08ewc/production/2267231a03a8c80565f391ab587c82e3b147ed06-1697x1131.jpg","most visited place", "$1200");
var Monaco = new Places ("Monaco", "Europe", "https://rivierabarcrawltours.com/wp-content/uploads/2020/12/Private-Tours-in-Monaco-2.jpg","most visited place", "$1200");
var Spain = new Places ("Spain", "Europe", "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Spain/Costa%20Brava/tossa-de-mar-costa-brava-main-page.jpg?imwidth=680","most visited place", "$1200");
var 	Poland = new Places ("Poland", "Europe", "https://www.nationsonline.org/gallery/Poland/Malbork-Castle.jpg", "most visited place","$1200");
var 	Portugal = new Places ("Portugal", "Europe", "https://www.travelandleisure.com/thmb/EuLkU3LcnTICvpEUJeKoU9JdLJA=/1800x1200/filters:fill(auto,1)/TAL-header-azenhas-do-mar-portugal-PRTGREECE0922-1b53ba0a4b4c4eef999ae4190f7981cd.jpg","most visited place", "$1200");
var Sweden = new Places ("Sweden", "Europe", "https://www.planetware.com/wpimages/2020/02/sweden-in-pictures-beautiful-places-to-photograph.jpg","most visited place", "$1200");
var Romania = new Places ("Romania", "Europe", "https://cdn.romania-insider.com/sites/default/files/styles/article_large_image/public/2019-02/bucharest_universitatii_square_-_shutterstock.jpg","most visited place", "$1200");
var Albania = new Places ("Albania", "Europe", "https://www.state.gov/wp-content/uploads/2018/11/Albania-2218x1406.jpg","most visited place", "$1200");

var 	Canada = new Places ("Canada", "America", "https://assets3.thrillist.com/v1/image/2995034/414x310/crop;webp=auto;jpeg_quality=60;progressive.jpg", "most visited place", "$1200");
var Mexico = new Places ("Mexico", "America", "https://cdn.britannica.com/60/92960-050-327CF926/pyramid-Mayan-Chichen-Itza-Mex.jpg", "most visited place", "$1200");
var 	USA = new Places ("USA", "America", "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/2016-10/About_the_USA_NYC_Statue_Liberty_._CROP_Web72DPI.jpg?itok=M7fJ8X6f", "most visited place", "$1200");
var Bahamas = new Places ("Bahamas", "America", "https://mma.prnewswire.com/media/1830956/The_Bahamas_Acklins_Crooked_Island.jpg?p=facebook","most visited place", "$1200");
var 	Barbados = new Places ("Barbados", "America", "https://www.sandals.com/blog/content/images/2020/03/Sandals-Royal-Barbados-Long-Beach.jpg","most visited place",  "$1200");
var 	Cuba = new Places ("Cuba", "America", "https://www.state.gov/wp-content/uploads/2019/04/Cuba-e1556040683458-2500x1406.jpg","most visited place",  "$1200");
var 	Jamaica = new Places ("Jamaica", "America", "https://i.natgeofe.com/k/053d2f8e-f28e-4e78-9680-fe35ed7b635d/jamaica-beach_16x9.jpg?w=1200","most visited place",  "$1200");
var 	Guatemala = new Places ("Guatemala", "America", "https://www.state.gov/wp-content/uploads/2019/04/Guatemala-e1556100904595-2500x1406.jpg","most visited place",  "$1200");
var 	Panama = new Places ("Panama", "America", "https://www.caf.com/media/3682081/panama-1.jpg","most visited place",  "$1200");
var 	Argentina = new Places ("Argentina", "America", "https://www.americasquarterly.org/wp-content/uploads/2016/10/Argentina_Top.jpg","most visited place",  "$1200");
var Brazil = new Places ("Brazil", "America", "https://i.natgeofe.com/k/33e48abd-f2e7-4430-b7bf-cc9a18c14cc6/brazil-christ-the-redeemer_2x1.jpg","most visited place",  "$1200");
var 	Colombia = new Places ("Colombia", "America", "https://images.thestar.com/0ZHXVB4BKz_WT6EALUX6-SHzs60=/968x726/smart/filters:cb(1666307258191)/https://www.thestar.com/content/dam/thestar/life/travel/2022/10/21/i-ate-my-way-through-colombia-from-crunchy-big-booty-ants-to-homestyle-food-market-dishes/bogota_cityscape_credit_courtesy_of_procolombia.jpg", "most visited place", "$1200");
var Peru = new Places ("Peru", "America", "https://www.peru.travel/Contenido/AcercaDePeru/Imagen/en/6/0.0/Principal/Machu%20Picchu.jpg", "most visited place", "$1200");
var Venezuela = new Places ("Venezuela", "America", "https://assets.kpmg/is/image/kpmg/front-view-of-mountain-with-fog-venezuela?scl=1", "most visited place", "$1200");

var  Morocco = new Places ("Morocco", "Africa", "https://deih43ym53wif.cloudfront.net/chefchaouen-morocco-shutterstock_1090471322_999d0f94d4.jpeg","most visited place",  "$1200");
var Angola = new Places ("Angola", "Africa", "https://www.state.gov/wp-content/uploads/2018/11/Angola-e1555944773476-2500x1406.jpg", "most visited place", "$1200");
var  Madagascar = new Places ("Madagascar", "Africa", "https://www.telegraph.co.uk/content/dam/Travel/2017/june/cycling%20131314241_Cultura%20Exclusive_Madagascar.jpg", "most visited place", "$1200");
var  Ghana = new Places ("Ghana", "Africa", "https://www.collinsdictionary.com/images/full/ghana_430836178_1000.jpg", "most visited place", "$1200");
var Zimbabwe = new Places ("Zimbabwe", "Africa", "https://www.tasafaris.com/wp-content/uploads/2013/09/01.Aerial-view-of-Falls-Custom.jpg", "most visited place", "$1200");
var Tunisia = new Places ("Tunisia", "Africa", "https://lp-cms-production.imgix.net/2019-06/f72dbca584b269e1aa3708817a83613e-tunisia.jpg","most visited place",  "$1200");
var Algeria = new Places ("Algeria", "Africa", "https://media.worldnomads.com/travel-safety/algeria/terrorism-algeria-lead.jpg","most visited place",  "$1200");
var Sudan = new Places ("Sudan", "Africa", "https://www.state.gov/wp-content/uploads/2018/11/Sudan-e1555938324206-2500x1406.jpg","most visited place",  "$1200");
var Uganda = new Places ("Uganda", "Africa", "https://www.globalization-partners.com/wp-content/uploads/2019/12/globalpedia-hero-uganda-1.jpg","most visited place",  "$1200");
var Kenya = new Places ("Kenya", "Africa", "https://www.nationsonline.org/gallery/Kenya/Amboseli-National-Park-Kilimanjaro.jpg","most visited place",  "$1200");
var Egypt = new Places ("Egypt", "Africa", "https://assets.traveltriangle.com/blog/wp-content/uploads/2018/12/Summer-In-Egypt-Cover.jpg","most visited place",  "$1200");
var  Ethiopia = new Places ("Ethiopia", "Africa", "https://cdn.britannica.com/26/58626-050-3B2B1DA0/Simien-Mountains-Ethiopian-Plateau-Ethiopia.jpg","most visited place",  "$1200");
var Nigeria = new Places ("Nigeria", "Africa", "https://cdn.aaihs.org/wp-content/uploads/2021/11/F795DDBC-632C-4FB6-BD65-48CF71A58CA6_1_201_a-scaled.jpeg","most visited place",  "$1200");
var  Mozambique = new Places ("Mozambique", "Africa", "https://assets.vogue.com/photos/59442ce6a0626a2aadee98eb/master/w_2560%2Cc_limit/01-mozambique-best-secret-beaches.jpg","most visited place",  "$1200");

var arr = [India,emirates, Vietnam, Tajikistan, Israel, Iran, Thailand, 
  Malaysia, Nepal, Bangladesh, China, Japan, Philippines, Cyprus, Azerbaijan, Singapore, Kuwait, Turkey, Hungary, Austria, Switzerland, Germany, 
  Bulgaria, France, UnitedKingdom, Italy, Denmark, Finland, Moldova, Iceland, Monaco, Spain, Poland, Portugal
  , Sweden, Romania, Albania, Morocco, Angola, Madagascar, Ghana, Zimbabwe, Tunisia, Algeria, Sudan, Uganda, Kenya, Egypt, Ethiopia, Ethiopia, 
  Nigeria, Mozambique, Canada, Mexico, USA, Bahamas, Barbados, Cuba, Jamaica, Guatemala, Panama, Argentina, Brazil, Colombia, Peru, Venezuela]
	




for (var i of arr){
   
            var tmp=`
            <div class="card" style="width: 18rem;">
            <img src=" ${i.Img} " class="card-img-top" style ="height: 16rem" alt="ERR">
            <div class="card-body">
              <h4 class="card-title">${i.PlaceName}</h4>
              <h5 class="card-title">${i.continent}</h5>
              <p class="card-text">${i.description}</p>
              <a href="#" class="btn btn-primary">${i.price}</a>
            </div>
          </div>`

          main.innerHTML+=tmp
        }
        

       
       btn.addEventListener("click", function(){
        main.innerHTML=""

        for (var j of arr){
        if (inp.value.toLowerCase()==j.PlaceName.toLowerCase()){
         console.log(inp.alue)
          var tmp1=`
          <div class="card" style="width: 18rem;">
          <img src=" ${j.Img} " class="card-img-top" style ="height: 16rem" alt="ERR">
          <div class="card-body">
            <h4 class="card-title">${j.PlaceName}</h4>
            <h5 class="card-title">${j.continent}</h5>
            <p class="card-text">${j.description}</p>
            <a href="#" class="btn btn-primary">${j.price}</a>
          </div>
        </div>`

        main.innerHTML+=tmp1

      } 
    
        }
       
       })

sortbtn.addEventListener("click",function(){
  main.innerHTML=""
  for (var i of arr.sort((a,b)=> a.PlaceName.localeCompare(b.PlaceName))){
    var tmp=`
    <div class="card" style="width: 18rem;">
    <img src=" ${i.Img} " class="card-img-top" style ="height: 16rem" alt="ERR">
    <div class="card-body">
      <h4 class="card-title">${i.PlaceName}</h4>
      <h5 class="card-title">${i.continent}</h5>
      <p class="card-text">${i.description}</p>
      <a href="#" class="btn btn-primary">${i.price}</a>
    </div>
  </div>`

  main.innerHTML+=tmp
  }
})



