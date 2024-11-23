var cssId = 'myCss';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://maestrolux-live.vercel.app/scripts/side-right.css';
    link.media = 'all';
    head.appendChild(link);
}

var openElm = '<div id="gallery_panel"><div class="btn-float-opt"><button class="btn-icon waves-effect btn" id="open_professional"><i class="material-icons">business</i></button> <button class="btn-icon waves-effect btn" id="open_minimal3d"><i class="material-icons">filter_3</i></button> <button class="btn-icon waves-effect btn" id="open_minimal2d"><i class="material-icons">looks_two</i></button> <button class="btn-icon waves-effect btn" id="open_creative"><i class="material-icons">spa</i></button></div><div class="drawer-opt right-aligned sidenav-opt" id="slidemenu"><div class="opt-wrap"><div class="hidden-sm-up"><div class="btn-icon waves-effect" id="close_sideright"><i class="material-icons">arrow_back</i></div></div><ul class="tabs"><li class="tab tab-label"><a href="#professional" class="active"><i class="material-icons">business</i>Professional</a><li class="tab tab-label"><a href="#minimal3d"><i class="material-icons">filter_3</i>Minimal 3D</a><li class="tab tab-label"><a href="#minimal2d"><i class="material-icons">looks_two</i>Minimal 2D</a><li class="tab tab-label"><a href="#creative"><i class="material-icons">spa</i>Creative</a></ul>';
var closeElm = '</div></div></div>';
function renderList(items) {
  var gallery = "";
  for (var i=0;i<items.length;i++) {
    gallery += '<li><a target="_blank" href="'+ items[i].link +'"><figure><img src="'+ items[i].thumb +'" alt="'+ items[i].name +'" /></figure>'+ items[i].name +'</a></li>';
  }
  return gallery;
}

var minimal3d = [
  {
    name: "agency",
    style: 'minimal3d',
    tags: ['agency', 'services', 'marketing'],
    link: "https://maestrolux-live.vercel.app/minimal3d/agency/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/minimal3d/agency_JoJRnRtFPp.png?updatedAt=1723478373745"
  },
  {
    name: "marketing",
    style: 'minimal3d',
    tags: ['agency', 'services', 'marketing'],
    link: "https://maestrolux-live.vercel.app/minimal3d/marketing/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/minimal3d/marketing_JPY8RxmNcE.png?updatedAt=1723478373570"
  },
  {
    name: "software",
    style: 'minimal3d',
    tags: ['software', 'saas', 'cloud'],
    link: "https://maestrolux-live.vercel.app/minimal3d/software/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/minimal3d/software_uDjMB3ein.png?updatedAt=1723478377268"
  },
  {
    name: "crypto",
    style: 'minimal3d',
    tags: ['finance', 'cryptocurrency', 'blockchain'],
    link: "https://maestrolux-live.vercel.app/minimal3d/crypto/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/minimal3d/crypto_BAaxaRV4F.png?updatedAt=1723478373350"
  },
  {
    name: "cloud",
    style: 'minimal3d',
    tags: ['cloud', 'hosting', 'software'],
    link: "https://maestrolux-live.vercel.app/minimal3d/cloud/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/minimal3d/cloud_Yyf5aLeLRC.png?updatedAt=1723478373521"
  },
  {
    name: "fintech",
    style: 'minimal3d',
    tags: ['finance', 'business', 'apps'],
    link: "https://maestrolux-live.vercel.app/minimal3d/fintech/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/minimal3d/fintech_SqzURLMcH.png?updatedAt=1723478373402"
  },
  {
    name: "dating apps",
    style: 'minimal3d',
    tags: ['social', 'dating', 'apps'],
    link: "https://maestrolux-live.vercel.app/minimal3d/dating-apps/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/minimal3d/dating_hE391t8v2.png?updatedAt=1723478373356"
  },
  {
    name: "food apps",
    style: 'minimal3d',
    tags: ['food', 'business', 'apps'],
    link: "https://maestrolux-live.vercel.app/minimal3d/food/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/minimal3d/food_0SJkfarZbn.png?updatedAt=1723478373481"
  },
  {
    name: "security",
    style: 'minimal3d',
    tags: ['software', 'saas', 'security'],
    link: "https://maestrolux-live.vercel.app/minimal3d/security/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/minimal3d/security_lwJDsLOLT2.png?updatedAt=1723478377283"
  },
  {
    name: "retail",
    style: 'minimal3d',
    tags: ['retail', 'business', 'apps'],
    link: "https://maestrolux-live.vercel.app/minimal3d/retail/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/minimal3d/retail_Zb5Xn7Lmwo.png?updatedAt=1723478373495"
  },
  {
    name: "medical",
    style: 'minimal3d',
    tags: ['medical', 'services'],
    link: "https://maestrolux-live.vercel.app/minimal3d/medical/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/minimal3d/medical_eZQ1LfzfD.png?updatedAt=1723478373652"
  },
  {
    name: "education",
    style: 'minimal3d',
    tags: ['education', 'corporate', 'services'],
    link: "https://maestrolux-live.vercel.app/minimal3d/education/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/minimal3d/education_o_X0ztRs06.png?updatedAt=1723478373465"
  },
]
  
var minimal2d = [
  {
    name: "agency",
    style: 'minimal2d',
    tags: ['agency', 'services', 'marketing'],
    link: "https://maestrolux-live.vercel.app/minimal2d/marketing/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/minimal2d/agency_2_5z-3FeNnVh.png?updatedAt=1723478424289"
  },
  {
    name: "saas2",
    style: 'minimal2d',
    tags: ['software', 'apps', 'cloud'],
    link: "https://maestrolux-live.vercel.app/minimal2d/saas2/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/minimal2d/saas2_ORfcnZLQU.png?updatedAt=1723478424224"
  },
  {
    name: "education",
    style: 'minimal2d',
    tags: ['education', 'corporate', 'services'],
    link: "https://maestrolux-live.vercel.app/minimal2d/education/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/minimal2d/education_2_69CIjs1wTU.png?updatedAt=1723478424257"
  },
  {
    name: "crypto",
    style: 'minimal2d',
    tags: ['finance', 'cryptocurrency', 'blockchain'],
    link: "https://maestrolux-live.vercel.app/minimal2d/crypto/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/minimal2d/crypto_2_RgN4h9Ml-N.png?updatedAt=1723478424261"
  },
  {
    name: "cloud",
    style: 'minimal2d',
    tags: ['cloud', 'hosting', 'software'],
    link: "https://maestrolux-live.vercel.app/minimal2d/cloud/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/minimal2d/cloud_2_RUqRC5FE__.png?updatedAt=1723478424304"
  },
  {
    name: "fintech",
    style: 'minimal2d',
    tags: ['finance', 'business', 'apps'],
    link: "https://maestrolux-live.vercel.app/minimal2d/fintech/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/minimal2d/fintech_2_ANyM5lz4K.png?updatedAt=1723478424343"
  },
  {
    name: "social apps",
    style: 'minimal2d',
    tags: ['social', 'marketing', 'apps'],
    link: "https://maestrolux-live.vercel.app/minimal2d/social-apps/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/minimal2d/social%20apps_RJSomTnEF.png?updatedAt=1723478428192"
  },
  {
    name: "saas",
    style: 'minimal2d',
    tags: ['software', 'apps', 'cloud'],
    link: "https://maestrolux-live.vercel.app/minimal2d/saas/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/minimal2d/saas_Q2WHzQag3.png?updatedAt=1723478424261"
  },
  {
    name: "medical",
    style: 'minimal2d',
    tags: ['medical', 'services'],
    link: "https://maestrolux-live.vercel.app/minimal2d/medical/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/minimal2d/medical_2_II8HvFze6K.png?updatedAt=1723478424366"
  },
  {
    name: "marketing",
    style: 'minimal2d',
    tags: ['agency', 'services', 'marketing'],
    link: "https://maestrolux-live.vercel.app/minimal2d/agency/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/minimal2d/marketing_2_ZZUbrkAxq.png?updatedAt=1723478424214",
  },
  {
    name: "retail",
    style: 'minimal2d',
    tags: ['retail', 'business', 'apps'],
    link: "https://maestrolux-live.vercel.app/minimal2d/retail/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/minimal2d/retail_2_5LZs9nAYj.png?updatedAt=1723478424197"
  },
];

var creative = [
  {
    name: "AI",
    style: 'creative',
    tags: ['ai', 'software', 'machine learning'],
    link: "https://maestrolux-live.vercel.app/creative/ai/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/creative/AI_GM8XVR_-Uh.png?updatedAt=1723478338422"
  },
  {
    name: "blockchain",
    style: 'creative',
    tags: ['blockchain', 'machine learning', 'cryptocurrency'],
    link: "https://maestrolux-live.vercel.app/creative/blockchain/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/creative/Blockchain_VsBHS3Gn-.png?updatedAt=1723478338426"
  },
  {
    name: "wallet",
    style: 'creative',
    tags: ['wallet', 'fintech', 'cryptocurrency'],
    link: "https://maestrolux-live.vercel.app/creative/wallet/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/creative/Wallet_jjXXrmurK.png?updatedAt=1723478338484"
  },
  {
    name: "fintech",
    style: 'creative',
    tags: ['wallet', 'fintech', 'cryptocurrency'],
    link: "https://maestrolux-live.vercel.app/creative/fintech/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/creative/fintech_6zbzqAWT_D.png?updatedAt=1723478338427"
  },
  {
    name: "nft",
    style: 'creative',
    tags: ['blockchain', 'nft', 'cryptocurrency'],
    link: "https://maestrolux-live.vercel.app/creative/nft/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/creative/nft_80oi_y-DS.png?updatedAt=1723478338551"
  },
  {
    name: "nft 2",
    style: 'creative',
    tags: ['blockchain', 'nft', 'cryptocurrency'],
    link: "https://maestrolux-live.vercel.app/creative/nft2/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/creative/nft2_7r0UiFp3fR.png?updatedAt=1723478338487"
  },
  {
    name: "avatar",
    style: 'creative',
    tags: ['avatar', 'profile', 'cv'],
    link: "https://maestrolux-live.vercel.app/creative/avatar/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/creative/Avatar_5bhIcZdmB.png?updatedAt=1723478338580"
  },
  {
    name: "online cv",
    style: 'creative',
    tags: ['avatar', 'profile', 'cv'],
    link: "https://maestrolux-live.vercel.app/creative/online-cv/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/creative/Online%20CV_6gNQhu48aW.png?updatedAt=1723478338556"
  },
];

var professional = [
  {
    name: "agency",
    style: 'professional',
    tags: ['agency', 'marketing', 'services'],
    link: "https://maestrolux-live.vercel.app/professional/agency/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/Card_Agency2_yQxwhkOOF.jpg?updatedAt=1593865456210"
  },
  {
    name: "architect",
    style: 'professional',
    tags: ['arhitect', 'marketing', 'services'],
    link: "https://maestrolux-live.vercel.app/professional/architect/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/ArchitectVue_mRDTrcrZ-.jpg?updatedAt=1601470700604"
  },
  {
    name: "medical",
    style: 'professional',
    tags: ['medical', 'services'],
    link: "https://maestrolux-live.vercel.app/professional/medical/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/Carrd_Medical_qMalAG38d.jpg?updatedAt=1593865456028"
  },
  {
    name: "education",
    style: 'professional',
    tags: ['education', 'corporate', 'services'],
    link: "https://maestrolux-live.vercel.app/professional/education/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/Card_Education_xAfWF_8N8.jpg?updatedAt=1593865456022"
  },
  {
    name: "fashion",
    style: 'professional',
    tags: ['fashion', 'business', 'retail'],
    link: "https://maestrolux-live.vercel.app/professional/fashion/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/03_04_preview_fashion_rawmjfFNUO.jpg?updatedAt=1601470700604"
  },
  {
    name: "cryptocurrency",
    style: 'professional',
    tags: ['finance', 'cryptocurrency', 'blockchain'],
    link: "https://maestrolux-live.vercel.app/professional/crypto/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/CoinzVue_l-DV3hy73q.jpg?updatedAt=1601470700604"
  },
  {
    name: "hosting",
    style: 'professional',
    tags: ['cloud', 'hosting', 'software'],
    link: "https://maestrolux-live.vercel.app/professional/hosting/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/HostingVue_Hg_JPu_in.jpg?updatedAt=1601470700604"
  },
  {
    name: "saas",
    style: 'professional',
    tags: ['saas', 'cloud', 'software'],
    link: "https://maestrolux-live.vercel.app/professional/saas/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/SoftwareVue_5wjnUj7_9.jpg?updatedAt=1601470700604"
  },
  {
    name: "mobile apps",
    style: 'professional',
    tags: ['apps', 'business', 'software'],
    link: "https://maestrolux-live.vercel.app/professional/mobile-apps/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/03_06_preview_mobile_HJux8GYHg.jpg?updatedAt=1601470700604"
  },
  {
    name: "movie",
    style: 'professional',
    tags: ['apps', 'movie', 'services'],
    link: "https://maestrolux-live.vercel.app/professional/movie/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/Carrd_Movie_wLFQlbgzu.jpg?updatedAt=1593865456295"
  },
  {
    name: "profile",
    style: 'professional',
    tags: ['portfolio', 'profile', 'cv'],
    link: "https://maestrolux-live.vercel.app/professional/profile/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/03_07_preview_profile_t00U1dDVUT.jpg?updatedAt=1601470700604"
  },
  {
    name: "profile feminine",
    style: 'professional',
    tags: ['portfolio', 'profile', 'cv'],
    link: "https://maestrolux-live.vercel.app/professional/femine/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/femine_dark_BKasLgDce.jpg?updatedAt=1650908535433"
  },
  {
    name: "profile masculine",
    style: 'professional',
    tags: ['portfolio', 'profile', 'cv'],
    link: "https://maestrolux-live.vercel.app/professional/maskulino/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/maskulino_dark_6sdDKXBXn.jpg?updatedAt=1650911006919"
  },
  {
    name: "profile unisex",
    style: 'professional',
    tags: ['portfolio', 'profile', 'cv'],
    link: "https://maestrolux-live.vercel.app/professional/unisex/en/index.html",
    thumb: "https://ik.imagekit.io/q5gfy1zcvl/unidark_2__P-J9Hr0K5.jpg?updatedAt=1650896693061"
  },
];

var professional_ctn = '<div class="tab-item active" id="professional"><div class="explore"><ul>'+ renderList(professional) +'</ul></div></div>';
var minimal3d_ctn = '<div class="tab-item" id="minimal3d"><div class="explore"><ul>'+ renderList(minimal3d) +'</ul></div></div>';
var minimal2d_ctn = '<div class="tab-item" id="minimal2d"><div class="explore"><ul>'+ renderList(minimal2d) +'</ul></div></div>';
var creative_ctn = '<div class="tab-item" id="creative"><div class="explore"><ul>'+ renderList(creative) +'</ul></div></div>';

