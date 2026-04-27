// WhatsApp config
const PHONE = '+919103595615'; // your number
const MSG_QUICK = encodeURIComponent("Hi DhobiXpress! I'd like to book a pickup for laundry.\nName:\nPickup address:\nPreferred pickup date & time:\nService: Wash & Iron / Dry Clean / Steam Press\nComments:");
const MSG_ORDER = encodeURIComponent("Hi DhobiXpress! I want to order Wash & Iron.\nQuantity (kg):\nPickup address:\nPreferred pickup date & time:");

function waLink(message){
  const num = PHONE.replace(/[^0-9]/g, '');
  return `https://wa.me/${num}?text=${message}`;
}

document.addEventListener('DOMContentLoaded', ()=>{

  // WA buttons
  const waCta = document.getElementById('whatsapp-cta');
  const orderWash = document.getElementById('order-wash');
  const waFab = document.getElementById('wa-fab');
  const viewServices = document.getElementById('view-services');
  const schedule = document.getElementById('schedule');

  if(waCta) waCta.addEventListener('click', ()=>{ window.open(waLink(MSG_QUICK), '_blank'); });
  if(orderWash) orderWash.addEventListener('click', ()=>{ window.open(waLink(MSG_ORDER), '_blank'); });
  if(waFab) waFab.href = waLink(MSG_QUICK);
  if(viewServices) viewServices.addEventListener('click', ()=>{ document.getElementById('services').scrollIntoView({behavior:'smooth'}); });
  if(schedule) schedule.addEventListener('click', ()=>{ const msg = encodeURIComponent("Hi DhobiXpress! I'd like to schedule a pickup.\nName:\nPickup address:\nPreferred date & time:"); window.open(waLink(msg), '_blank'); });

  document.querySelectorAll('.btn').forEach(b=>b.addEventListener('keyup',(e)=>{if(e.key==='Enter')b.click()}));

  // Tabs buttons (women/kids/household)
  const tabButtons = document.querySelectorAll('.tabs .tab-btn');
  const tabContent = document.getElementById('tab-content');

  // Data arrays (full lists provided)
  const dryCleaningData = {
    women: [
{item:"Belt",price:"₹49"},{item:"Blouse",price:"₹89"},{item:"Blouse Designer",price:"₹119"},{item:"Blouse Heavy Work",price:"₹149"},{item:"Blouse Normal",price:"₹69"},{item:"Boot",price:"₹299"},{item:"Cap ( Casual / Woolen )",price:"₹49"},{item:"Chadar",price:"₹179"},{item:"Chadar Muga and Pator",price:"₹199"},{item:"Choli",price:"₹200"},{item:"Choli + Lehenga + Dupatta",price:"₹499"},{item:"Coat - Long",price:"₹349"},{item:"Coat - Short",price:"₹249"},{item:"Designer Choli + Lehenga + Duppatta",price:"₹999"},{item:"Designer Kurta",price:"₹259"},{item:"Designer Lehenga / ghagra",price:"₹399"},{item:"Dhara",price:"₹359"},{item:"Dress",price:"₹249"},{item:"Dress ( Cotton )",price:"₹199"},{item:"Dress ( Heavy )",price:"₹399"},{item:"Dress / Frock / Jumpsuit Long",price:"₹200"},{item:"Dress / Frock / Jumpsuit Short",price:"₹150"},{item:"Dress Indo western",price:"₹599"},{item:"Dungaree Long",price:"₹200"},{item:"Dungaree Short",price:"₹169"},{item:"Dupatta",price:"₹99"},{item:"Dupatta Heavy Work",price:"₹149"},{item:"Formal And Semi Formal Trouser",price:"₹170"},{item:"Formal Gown Long Heavy work",price:"₹700"},{item:"Formal Gown Long Normal",price:"₹500"},{item:"Formal Gown Short Heavy Work",price:"₹600"},{item:"Formal Gown Short Normal",price:"₹500"},{item:"Garo Dakmanda Heavy",price:"₹275"},{item:"Garo Dakmanda Normal",price:"₹190"},{item:"Ghagra 3pc( n )",price:"₹699"},{item:"Ghagra Heavy 3pcs( d )",price:"₹899"},{item:"Gloves Leather",price:"₹100"},{item:"Gloves Woolen",price:"₹65"},{item:"Handkerchief",price:"₹25"},{item:"Hats",price:"₹99"},{item:"Innerwear / Undergarments",price:"₹49"},{item:"Jacket - Faux fur Long",price:"₹700"},{item:"Jacket - Faux fur Short",price:"₹500"},{item:"Jacket Leather",price:"₹600"},{item:"Jacket Normal Long",price:"₹300"},{item:"Jacket Normal Short",price:"₹250"},{item:"Jacket Puffer Long",price:"₹399"},{item:"Jacket Puffer Short",price:"₹299"},{item:"Jacket Rexine",price:"₹299"},{item:"Jainkyrshah",price:"₹179"},{item:"Jainsem",price:"₹359"},{item:"Jeans",price:"₹170"},{item:"Jeggings",price:"₹170"},{item:"Kameez / Kurta",price:"₹119"},{item:"Kameez / Kurti Cotton",price:"₹200"},{item:"Kesa Pator Chaddar",price:"₹109"},{item:"Kesa Pator Mekhela",price:"₹299"},{item:"Kesa Pator Mekhela Chaddar 3pcs",price:"₹399"},{item:"Khasi Dhara Munga",price:"₹359"},{item:"Khasi Jainsem Heavy",price:"₹299"},{item:"Khasi Jainsem Light",price:"₹249"},{item:"Kurta + Pants / Salwar / Churidar",price:"₹199"},{item:"Kurta + Pants / Salwar / Churidar + Dupatta",price:"₹299"},{item:"Ladies Suit 2pcs",price:"₹300"},{item:"Ladies Suit 3pcs",price:"₹350"},{item:"Lehenga / Flared Skirt",price:"₹359"},{item:"Lehenga / Ghagra",price:"₹400"},{item:"Lehenga Designer",price:"₹700"},{item:"Lehenga Heavy Work",price:"₹600"},{item:"Lehenga Medium Work",price:"₹500"},{item:"Lehenga Normal Work",price:"₹400"},{item:"Manipuri / Mizo / Naga ( Wrap around Skirt ) Heavy",price:"₹400"},{item:"Manipuri / Mizo / Naga ( Wrap around Skirt ) Normal",price:"₹300"},{item:"Mekhela Chaddar 3pcs",price:"₹399"},{item:"Mekhela Muga and Pator",price:"₹199"},{item:"Mekhela Normal",price:"₹179"},{item:"Muffler Pashmina",price:"₹220"},{item:"Muffler Woolen",price:"₹150"},{item:"Muga Chaddar",price:"₹109"},{item:"Muga Mekhela",price:"₹299"},{item:"Muga Mekhela Chaddar 3pcs",price:"₹399"},{item:"Night Dress",price:"₹100"},{item:"Palazo Pant",price:"₹150"},{item:"Parka Coat Long",price:"₹350"},{item:"Parka Coat Short",price:"₹300"},{item:"Pator Chaddar",price:"₹109"},{item:"Pator Mekhela",price:"₹299"},{item:"Pator Mekhela Chaddar 3pcs",price:"₹399"},{item:"Peticoat Cotton",price:"₹85"},{item:"Peticoat Woolen",price:"₹120"},{item:"Plazzo / Sharara Heavy Work",price:"₹350"},{item:"Plazzo / Sharara Normal",price:"₹250"},{item:"Purse",price:"₹199"},{item:"Pyjama / Pants / Salwar / Churidar / Palazo Pants",price:"₹99"},{item:"Salwar / Churidar 3pcs",price:"₹350"},{item:"Salwar Kurta Normal Work - 3pcs",price:"₹350"},{item:"Salwar Kurta Pashmina and Other Heavy Work - 3pcs",price:"₹450"},{item:"Saree ( Cotton / Synthetic / Light )",price:"₹199"},{item:"Saree ( Embroidered / Heavy )",price:"₹349"},{item:"Saree ( Silk / Chiffon / Georgette / Heavy )",price:"₹299"},{item:"Saree Designer",price:"₹500"},{item:"Saree Plain",price:"₹250"},{item:"Shawl Pashmina",price:"₹699"},{item:"Shawl Shahtoosh",price:"₹699"},{item:"Shawl Woolen",price:"₹300"},{item:"Shirt",price:"₹130"},{item:"Shorts",price:"₹59"},{item:"Shorts / Capri",price:"₹130"},{item:"Shrug / Waist Coat",price:"₹200"},{item:"Skirt",price:"₹170"},{item:"Skirt - Pencil / Pleated / Other",price:"₹119"},{item:"Skirt Long",price:"₹200"},{item:"Socks Pair",price:"₹40"},{item:"Specialty Clothing",price:"₹599"},{item:"Stocking ( Pair ) - Regular",price:"₹69"},{item:"Stole / Scarf",price:"₹69"},{item:"Sweater / Cardigan - Full Sleeve",price:"₹200"},{item:"Sweater / Cardigan - Sleeveless",price:"₹180"},{item:"Sweatshirt / Jumper",price:"₹200"},{item:"Swim suit bikini set",price:"₹119"},{item:"Swim suit solid body suit",price:"₹179"},{item:"T - shirt",price:"₹130"},{item:"Thermals Set",price:"₹170"},{item:"Thermals Single",price:"₹110"},{item:"Top",price:"₹130"},{item:"Track suit",price:"₹300"},{item:"Western Formal Suit - 2 pcs ( Shirt, Coat, Pant )",price:"₹400"},{item:"Wind Cheater / Rain Coat",price:"₹107"},{item:"Women Night Robe Cotton",price:"₹119"},{item:"Women Night Robe Satin",price:"₹159"},{item:"Women's Shoulder Bag",price:"₹599"},{item:"Women's Sling Bag",price:"₹399"}
    ],
    kids: [
{item:"Blouse",price:"₹39"},{item:"Blouse / Top",price:"₹69"},{item:"Choli + Lehenga + Dupatta",price:"₹299"},{item:"Coat",price:"₹179"},{item:"Combo - Shirt and Pant ( 2 pcs set )",price:"₹110"},{item:"Cotton Frock",price:"₹149"},{item:"Designer Frock",price:"₹199"},{item:"Dress",price:"₹150"},{item:"Dress ( Heavy )",price:"₹249"},{item:"Dungaree ( Short / Long )",price:"₹149"},{item:"Ethnic Kurta set - 2pcs",price:"₹199"},{item:"Ethnic wear ( Normal / Heavy work )",price:"₹199"},{item:"Frock",price:"₹119"},{item:"Jacket",price:"₹149"},{item:"Jeans",price:"₹80"},{item:"Kurta + Pants / Salwar / Churidar + Dupatta",price:"₹299"},{item:"Pyjama",price:"₹45"},{item:"Shirt",price:"₹70"},{item:"Shorts",price:"₹49"},{item:"Skirt",price:"₹89"},{item:"Suit 2 Pc",price:"₹200"},{item:"Suit 3 Pc",price:"₹299"},{item:"Sweater ( Full Sleeves )",price:"₹129"},{item:"Sweater ( Sleeveless )",price:"₹109"},{item:"T - Shirt",price:"₹69"},{item:"Tights and Leggings",price:"₹35"},{item:"Track suit / Night suit ( 2 pcs set )",price:"₹169"},{item:"Undergarment",price:"₹30"},{item:"Waist Coat",price:"₹100"}
    ],
    household: [
{item:"Bag",price:"₹350"},{item:"Bagpack Large",price:"₹499"},{item:"Bath Mat ( Large )",price:"₹59"},{item:"Bath Mat ( Small )",price:"₹49"},{item:"Bath Robe ( Medium )",price:"₹69"},{item:"Bath Robe ( Big )",price:"₹89"},{item:"Bath Robe ( Small )",price:"₹59"},{item:"Bath Towel",price:"₹59"},{item:"Bed Cover Double",price:"₹299"},{item:"Bed Cover Single",price:"₹249"},{item:"Bed Sheet Double",price:"₹199"},{item:"Bed Sheet Single",price:"₹119"},{item:"Blanket Double",price:"₹449"},{item:"Blanket Duvet ( Double )",price:"₹799"},{item:"Blanket Duvet ( Single )",price:"₹699"},{item:"Blanket Single",price:"₹349"},{item:"Curtain - Lace [Per Panel]",price:"₹289"},{item:"Curtain - Cotton [Per Panel]",price:"₹229"},{item:"Curtain - Embroidery Work [Per Panel]",price:"₹269"},{item:"Curtain - With Lining [Per Panel]",price:"₹349"},{item:"Curtain - Without Lining [ Per Panel ]",price:"₹239"},{item:"Cushion Cover Embroidery ( Small / Medium / Large size )",price:"₹169"},{item:"Cushion Cover Normal ( Large )",price:"₹119"},{item:"Cushion Cover Normal ( Medium )",price:"₹89"},{item:"Cushion Cover Normal ( Small )",price:"₹69"},{item:"Face Towel",price:"₹39"},{item:"Foot Mat ( 1ft * 2ft )",price:"₹59"},{item:"Gamosa",price:"₹54"},{item:"Hand Towel",price:"₹49"},{item:"Handgloves",price:"₹99"},{item:"Laptop Bag",price:"₹399"},{item:"Leather Bag ( Large )",price:"₹849"},{item:"Leather Bag ( Medium )",price:"₹599"},{item:"Leather Bag ( Small )",price:"₹449"},{item:"Mosquito Net",price:"₹299"},{item:"Oven Gloves ( Set )",price:"₹129"},{item:"Pillow Cover - Cotton / Terry Cotton",price:"₹49"},{item:"Pillow Cover - Embroidery",price:"₹99"},{item:"Pillow Cover 2 pcs Set",price:"₹65"},{item:"Pram",price:"₹399"},{item:"Quilt ( Double )",price:"₹549"},{item:"Quilt ( Single )",price:"₹449"},{item:"Quilt Cover ( Double )",price:"₹349"},{item:"Quilt Cover ( Single )",price:"₹249"},{item:"Razai",price:"₹479"},{item:"Sofa cover - Normal ( Single )",price:"₹349"},{item:"Sofa cover - Embroidery work ( Single )",price:"₹479"},{item:"Sofa cover - Lace ( Single )",price:"₹399"},{item:"Stuff Toy Big",price:"₹299"},{item:"Stuff Toy Medium",price:"₹199"},{item:"Stuff Toy Small",price:"₹119"},{item:"Suit Case Big",price:"₹499"},{item:"Suit Case Medium",price:"₹399"},{item:"Suit Case Small",price:"₹249"},{item:"Table Cloth Big",price:"₹149"},{item:"Table Cloth Small",price:"₹89"},{item:"Table Runner - Fancy",price:"₹179"},{item:"Table Runner Embroidery",price:"₹229"},{item:"Travel pillow with beads",price:"₹349"},{item:"Travel pillow without beads",price:"₹299"}
    ]
  };

  function render(category){
    const data = dryCleaningData[category];
    if(!data) return;
    let html = '<div class="table-wrap"><table class="price-table"><thead><tr><th style="text-align:left">Item</th><th style="text-align:right">Price</th></tr></thead><tbody>';
    data.forEach(r => {
      const item = r.item.replace(/\t/g,' ');
      html += `<tr><td>${item}</td><td style="text-align:right">${r.price}</td></tr>`;
    });
    html += '</tbody></table></div>';
    tabContent.innerHTML = html;
    tabContent.style.display = 'block';
    tabContent.scrollTop = 0;
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', ()=>{
      tabButtons.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.dataset.tab);
    });
  });

  // EmailJS: initialize and contact form
  (function(){ emailjs.init("Dnire2p5V6qSiSQ7j"); })(); // public key
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const params = {
      from_name: this.name.value,
      reply_to: this.email.value,
      message: this.message.value
    };
    emailjs.send("service_8ec1dm4","template_pffncbt",params)
      .then(()=>{ alert("✅ Message sent successfully! We’ll get back to you soon."); form.reset(); })
      .catch(err=>{ alert("❌ Failed to send message. Please try again later."); console.error(err); });
  });

});