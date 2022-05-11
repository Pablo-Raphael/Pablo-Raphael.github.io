'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "fbd8511f564b00f023adc3839abe2fc5",
"/": "fbd8511f564b00f023adc3839abe2fc5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "d9ee915d83480acc7c18f0f654791d5b",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/images/projects/quantday/4.jpg": "6078a2644f930c4ed4f0374bf78cfc2f",
"assets/images/projects/quantday/3.jpg": "b87b99426a15492ee26c3b238e18a979",
"assets/images/projects/quantday/logo.png": "6dcea94c7b5940d817d70dc5dbf22a88",
"assets/images/projects/quantday/2.jpg": "35da4542f9a45f8c2734984bce674801",
"assets/images/projects/quantday/1.jpg": "97fc9a7e2d67b8fbd26f713d564ac538",
"assets/images/projects/tradall/logo.jpg": "72feee72df5634b261403f42ccec6a31",
"assets/images/projects/tradall/5.jpg": "ae466748115bf11dbc86b9da4d0bb989",
"assets/images/projects/tradall/4.jpg": "028be3914fa71bfcd457da09399ec524",
"assets/images/projects/tradall/3.jpg": "4a3f09264e5f661e3ed489e29d362aeb",
"assets/images/projects/tradall/2.jpg": "e4468076f8098340097463e0eececb04",
"assets/images/projects/tradall/1.jpg": "8066ac53a363a748ca45185e46508def",
"assets/images/projects/tradall/6.jpg": "a803276a92f5d829b65f5ab9f7b9e10c",
"assets/images/projects/touch/logo.jpg": "4e8b6c12a4d2ad6f68b1eea01d981a10",
"assets/images/projects/touch/5.jpg": "b9c582c4ab9ca1448f7e4a1ebaa5fdd8",
"assets/images/projects/touch/4.jpg": "a279a28c9e9207a1345ce21f3426429b",
"assets/images/projects/touch/3.jpg": "8ef08f9b3f7d9b354f97b2cef12394cb",
"assets/images/projects/touch/2.jpg": "f313140e5956376c72fbb9b13383e34d",
"assets/images/projects/touch/1.jpg": "07636a534a64313bc58610e554c02372",
"assets/images/projects/touch/6.jpg": "2d274c7673c8ed6c5ddc461249c2d83f",
"assets/images/projects/loja/logo.jpg": "f09c40b069255230cd986aca5fa3c06e",
"assets/images/projects/loja/5.jpg": "77f688869091a56862d2ef1d4c76a222",
"assets/images/projects/loja/4.jpg": "0aa5be3fe262531b0093d6d516b380f2",
"assets/images/projects/loja/3.jpg": "8abf1e8aa20c2c908144ad4adf3127b1",
"assets/images/projects/loja/2.jpg": "21ff2b26a9b0aea22101dfe5e27f5119",
"assets/images/projects/loja/1.jpg": "c4edce9f14c142f0812f33aa92522da8",
"assets/images/certificados/flutter_udemy.png": "f9f4b553d19d60bf48239763a086219a",
"assets/images/certificados/logica_senai.png": "db4b34a9669b9d8f5a98c89042c8bd75",
"assets/images/certificados/python_udemy.png": "ff1426664feadb9f10a812404bf31006",
"assets/images/certificados/ti_senai.png": "daecaa91752950d77d7c8c6387fdfc70",
"assets/images/certificados/senac.png": "43f653c88bcc0699c5c0522c2b7dffa6",
"assets/images/certificados/python_cev.png": "d04506715bd99bd91738d60b46a95877",
"assets/images/certificados/pi_senai.png": "f97310f4697d15ec388042bdcbb0706d",
"assets/images/certificados/empty.png": "d46e6e91cb587ad5eff377a9d3b1e685",
"assets/images/skills/kivy.jpg": "32e92636174ef46fe85ce974167380ef",
"assets/images/skills/sql.jpg": "274fe84ca95ed19a3aad700425118f8f",
"assets/images/skills/android.jpg": "0ff93f04fa157c77e6598cd2869ebdc5",
"assets/images/skills/python.jpg": "62679e7c26c9e2d4a0b7a216f6475004",
"assets/images/skills/flutter.jpg": "38da46c92560c9cff61b9963d3003800",
"assets/images/skills/git.jpg": "b7bb2149754874448c92b24ecbf72404",
"assets/images/skills/ubuntu.jpg": "c0017d902e1be2b514d930eeea319b33",
"assets/images/skills/firebase.jpg": "8f0938365add3e953882d8305a5f12bd",
"assets/images/skills/github.jpg": "4b230e736160ee106c600b137d4bc7b0",
"assets/images/skills/kivymd.jpg": "64f4035a097f528d2e5849cf6a3830fc",
"assets/images/skills/dart.jpg": "b4347f96e549ad68c54bfbcfe90f40c7",
"assets/images/my-photo.png": "0bfeb1e93471c51cc11f7e520fa789c5",
"assets/images/sites/instagram.jpeg": "8dd000529d876129807b3779d014f2fb",
"assets/images/sites/github.png": "40afe0e38214da3cfc90647748db64a9",
"assets/images/sites/facebook.jpg": "45e3038f317ba9c4e380456956acaaab",
"assets/images/sites/linkedin.png": "e9d35cc18626547346e892778104448f",
"assets/NOTICES": "d5626c0212c190928a2a390d1b4592e7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"version.json": "426313f2f3133c2f20415344c4a22df3",
"main.dart.js": "3d956e965ff036663f81cee61372b6c6",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/ORIG_HEAD": "6a182c6d716fb4e47ff7714199332912",
".git/logs/HEAD": "ae39427ad716d12009750d028276d6c7",
".git/logs/refs/remotes/origin/main": "6baf618d9ed217427e290d5eedeb198b",
".git/logs/refs/remotes/origin/master": "f1ef269cc8f5ce6f86c08c5b280518cd",
".git/logs/refs/heads/main": "abf09ffe5adfaa712c0c1e83a9c60bbb",
".git/logs/refs/heads/master": "11534d93f77449d2a2ab732391534929",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/config": "4d81752e6032f5ba01efe8a935394927",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/index": "d24347bd16682609fe23d9421b33b6d1",
".git/objects/54/66b878025497602e51ae6900c3556788b6f20c": "558338dc1e0f8fda151cde7c748cba86",
".git/objects/54/1b0112dee6c9adce09304acb4b308d9d40cfc8": "8d24dcd13740a0fee4cc38ea1f5b0d17",
".git/objects/0c/34171a6c2c8362df3b4ea6cbe5d383274b4423": "0cb8f2b7c6a1c32dde677965d66997bf",
".git/objects/fc/8f53855953de5213e93b3edf3da47db0368d42": "3351c6ef5b4871ef77beb2055df6d38a",
".git/objects/63/4cd0b16cdc3ae8758850885304803f9f9c162f": "42b43a8363e5f301b1a513c53ddda04a",
".git/objects/ea/80d87a1ceaa0577ef646a7f4cbcc2c6207224f": "7504109a06a234d2f89d4260af6e6947",
".git/objects/af/280a31cbafbe01c2e990db131cf3c4d57355d1": "fb286cb46acdcfe64fead6bb1193c6c6",
".git/objects/7f/69baaa1fd58c617447ab77cf6795fe24818389": "550b0ad71ca2758c382f537614513da2",
".git/objects/04/6a747145f362351f0d9946dbfc81a3d9ca56f7": "96351923cc5d4011c82d1c00598be7e0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/c7/a93b838f51ab1934529377cc393f5b976b0d95": "06710bde58126beac22ec0bc303ab916",
".git/objects/c7/015cbad5e1095ba759b592b21dc6a0c445e7a8": "e50681b7963b9c397599a22afb761c76",
".git/objects/8c/2413fdfd7e27c923ae3d84e08fe57cc9699c65": "3d413f96ba0382115944953d8f112fb2",
".git/objects/2c/ec676cf283e32f3a703ef6fcb983bb5641a91f": "8fba0830e032b3930a8a9406b998136a",
".git/objects/28/2313643cbceaefc5a0f9bbf9e437183dafd5d8": "a4e8c0324c4c3ffc3ffae774418b8a88",
".git/objects/28/72666f7f311486081c1f59939c57aa97c60be3": "982d71ad171347007746c0c961ca1bf6",
".git/objects/28/a3056e12a4c7ebed4ba2dc3e489768ca49783e": "2b53b11575bba22a9ba3c4c63c0a2757",
".git/objects/28/f62d6e76ea1dea8f3c92cc49767515780517cb": "46b0b1dff81eadb7a405e8255c1737e6",
".git/objects/28/489dce7cc2b5adf8407946e593ffe2c1fc3698": "2be8cfeb7d9959396090a46e12f60600",
".git/objects/92/bbc7a599425f2c4b15a5c77f66037bb4f9ed90": "bdc73e06cd62e92e0edd9f64e9953602",
".git/objects/9e/14390115d86fc71e1b4ad5f3521ac2dc3f5c9e": "f52ad7e2e6fce182ba797f42515dc9b2",
".git/objects/9e/093f543518c10e3a7bcb27434ff4b217e922cb": "c7597a399fdf53be39051ea68156f7d0",
".git/objects/c1/1335397ea232109b38d8ba59e19b6b97bea028": "2a4463c120bca9d4b6024d3560ecebe3",
".git/objects/13/55916fbdee3b4c8206037c39e91cee23be073f": "2531e16dedabcb13968eabf48d0bb597",
".git/objects/13/882ec21e5f3b5bc7a0b450b7883dc105e3c05f": "708e82ef24c61b1715f42c9aef82274c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/3c/d63ef6e6c750a0fbf56ab73d0044b0148d630b": "9e55e1a15622e0c9d37248948e8c3eac",
".git/objects/c8/f488822827ed5362f99e00f587673b8c87a8f9": "847d1af4b92ae4f7ec73f4680c3f42fe",
".git/objects/d9/18d5e347b83aafedcf11b32200667f4e08cc29": "579f4f17ea8163a1ad2ca9e3316bcbbd",
".git/objects/d9/0c575090687852c88ff161d92fb6c5a83f452a": "ee42e02a799763d2da909002df417577",
".git/objects/82/d27bf1fa3dfa232df367e7cfebf44568480cf5": "09b270795373cd6fc7e5377f556d9ec3",
".git/objects/d2/a01c74d00aad81ed211539acd97c8d2abaa9d8": "34644af937823becf11c34f7a9962f15",
".git/objects/e3/832b21ec8f45a56840635ec202f89b19ce2427": "3932723f1c1be7064601fe031a721392",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/23/ed5136f2e8033cc1a2e2dfb54d220b28e5cfbf": "5e372b7a9270a1b0e391216ab590d2a7",
".git/objects/23/2c4f9077d05063602f4409c7c3c735eaed7285": "a4d59652bc6fdc17f09b003bb854d784",
".git/objects/58/75f0f2f0abf409e693c44a88c59b37532f082c": "86b50b80652f1c34c1e1b7acb9f5e35a",
".git/objects/5f/71e79b31d4189bc0300d9bb22d205b23495ab0": "941ff6d87bbed0b71018320af9514a38",
".git/objects/5f/402c336496cdd700f8eeae701f5dcb1d8a22b6": "aa34d1488f63cd00704e55ec8a963695",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/42/7cbe8a97f2c65bf7747a40978af47ed36969d1": "06b04e2db01f20c6c1518227ee5a4281",
".git/objects/f6/39e1231cc366875ae9f1648f270d27a3680910": "aeb9e53e677249b6e18c150471273f16",
".git/objects/96/88c70426ae6b7401ebf7a07b0f1edad3e4b234": "dd86bcfcd049dd11db7d10fb7759d6e7",
".git/objects/ae/f92eff65ae836cd87d406d149735cd1d13aea2": "2de6bc7939111b1372cc5c9adccd8dd1",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/c4/192631f25b34d77a7f159aa0da0e3ae99c4ef4": "546c588f67767790fc70913da1a77878",
".git/objects/c4/85d7393207d66f3c57990afe8311f47704736d": "bbd49fcb8a082cd842036ff5160b5d56",
".git/objects/4c/80bbd347f3aef8c5a6721780836e6a4dd83561": "bbbb92d1a27d0e94a22156b7b224f10e",
".git/objects/4c/dffbd836a41e803ca4bb52c61b3ff4aa841fe2": "6c92ec56e359dea5599b1e415c78f4ce",
".git/objects/4c/eadb3f55a4163eb7f067547ed9eeb663e04651": "677d954a4f0894cd31d40ca82fde4209",
".git/objects/83/f5f89044faf3fcc3e10eb39b53bf81652d4529": "03d44443ae6daf24b0daaf24ec5d52d3",
".git/objects/17/588425124ea4d2f535672f852e8206f966332b": "24c780fb7a13ebf5a851abdd3b90a0c4",
".git/objects/08/77e14ec81adb30b4cbfcaa550745e508bef784": "df48011cc6e155a4d2fe75c0696ddfc7",
".git/objects/47/3b197a2ff741654c1d0299c075b69086f6beca": "7231851196473f169f1cef470c9291c4",
".git/objects/69/b8883f42c3ee34c7d834682251d7872dd56ef0": "4c376f72f5f29246400e16937918a6f7",
".git/objects/4f/2e2b931a70469cdcf7045b5bb3a09d8f767ba6": "054bda077900e6b718bcf9d24dad4d53",
".git/objects/bd/492c2d474711fe9fae9f1ceef1577460e874be": "c6b3fe1a8d6b5e887e521b714ef00940",
".git/objects/dd/2d34c99e010c86e20d3a124860dad34259595b": "045a76e25a004cf8ef5c7b263882d5b1",
".git/objects/61/2ac5de6b6cc5d797624d49af91825493c668c0": "50b31f4e62ec11c9f0d719a508f52c49",
".git/objects/61/50aa1242dd7071768482c0c68fcab5c97abea3": "56f4ae3d018f53487c531fbf1af6395b",
".git/objects/1d/89192fe9e63e5434478584bb2d299a453941a2": "25f90064c3cd1bae11be95c51043239f",
".git/objects/10/d76c56b2af4945fdcaeafa1d6cdd6c11fe2b43": "893ccc5b967aca562535bae193b09c26",
".git/objects/5a/0725da60d34bdb797af76643a481ccf3fed393": "ccde7820303320c5b47d32f3bb363e05",
".git/objects/e5/7a5ee70237b85408573d409324f824def1baea": "ecec7facddc23a559bc1d93e571a8585",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/27/d06133ad503c8ea268d9cec927abb54c8263a4": "29f7eeb9180a564c1885e3a3ecc2e966",
".git/objects/11/68d7f9f88e13f56943cbb9f89eb74db63faee4": "2e0984b4572e4f6568d46c3eb4b4b5d3",
".git/objects/02/4764ee804377406d4a313e78ce7b7b560ef952": "a6af3d0a06aa75e56079c996702378dd",
".git/objects/02/3d7026fc69b98fa7b925c667d7da38947405a5": "8d1387c51c6e45b34467f6541c7fd6b6",
".git/objects/09/0b85826534b99bf7e5d90c7d2d190e132ea96c": "09a14155784117cd61eae64dd68ce041",
".git/objects/ad/9bbc7fd5939e5b58ae69c0c684cfa196d4259a": "9d42aa6fc4d280aa6cedb84f60849797",
".git/objects/46/883e91d931b3167f57635c520300d068ccf261": "1548391a63a1e24468e1b5cabc7d7ea6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/75/b25d9d1d48c55a757c766008cd755273b7af64": "8808741666784a25d274e70baa60bf20",
".git/objects/6e/716ef1886a839a5c374f20f094ed42c48f9157": "876e393fb4883df615053e0dd7899907",
".git/objects/c5/e809c073d91e429b097c55b48037f89086afb2": "760d86772b9777226441669272036b01",
".git/objects/0d/a96fe4bd6149abbac31588d2e2d5d8bebb213d": "c2bd625b096b171332bbaef6fe8f3327",
".git/objects/45/8108089d67bfbef7b58cb4f86a7545a7037e60": "c977c701b9e4fc8a7185b05d40d0ef73",
".git/objects/99/238ec31accbe916eebc07b5a13aafdb86c9932": "8087f2430641bf8659ded2c69af556ac",
".git/objects/c6/e64d90240d2afdeb2bb654fb5aed4f5f85b167": "a8facd3e62cdcd5a9e5d32f077d1fea6",
".git/objects/60/a266d05b9d9e77f0f7d38b0c1bb936a49fbe89": "b947df1f3365a6ce584f647310d8d769",
".git/objects/aa/3c50cc80385b8fa98c0f6e39f5e7e539cf8bb5": "529fcc41b292f6df5a82a8e58585b251",
".git/objects/a8/c311d5932b9e89be53ab3c72ae6697b40b65cb": "60cca36f55aa1aa1e2503f8aedbde0d3",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b7/1c6c7df2ff2fb708be7597d9eafc997d25b353": "0282a4dd20256936fda6d2d552cdc969",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/70/4751d2fc65abf7c62ac4c7559113787e6e06d8": "95797308198f2c447b640ce61896c1b0",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/53/e6fea43875c6913ed616eab6520e9ce9aca7cc": "4d9e91bba82d5067d5857a579488a919",
".git/objects/c3/63feec94e4e3f59e317c7f061922f1006bef52": "ae3795bfb9dd2e7d37fe6a603d632353",
".git/objects/c3/7f93aa3b92761b76ae24e3b0f790345a73ec40": "3fd6bd99b72a38d08afbee4bfc2052e9",
".git/objects/e7/cdf12249cf2a8713a930a9a90aebba7bb55ee3": "62a529c5cd2526e5b0d82a2bdfca7707",
".git/objects/4a/045c7705feb846c9f4a1a8f9cb1734d150430f": "61cc3f7b4b47751eb9bc7f2272922cb4",
".git/objects/6f/bfa07c2c1eef22f048066e0142b8afed3df9aa": "760f0ab84f08b89636fcc51afd774d9a",
".git/objects/d3/07a122fedb81f0ee258b75492392b5e4810593": "617dc88bf1f79a8273f5fee69c83cf34",
".git/objects/07/6cfd03b2e161cad9ecf5c533c3a51e6ef7daaf": "7a8b5cd57bcf345fd59c9644cb1db2e7",
".git/objects/ed/16b61180f9c1264e3bdc600e90d4ebfc75c7ca": "80419096f48e7fc47e7baeb933908884",
".git/objects/6d/5345c93e072272523398adba967c40492f4f4c": "8b018892bec0f7fcec7ee48eef856498",
".git/objects/dc/9630a12b8ef28631a3877ca24f1496a1f647f2": "d8e2b73ad90ef04d314fc1273836b9b9",
".git/objects/86/0efc252e3b2861ed01e4404c406931f65c03d8": "297fa2b8e787e317d60f6a422d50e9f8",
".git/objects/6b/ca4a78310a738b159bd5a0fade1f4323c5a4fd": "c1232981f09e3e6db276719d67ea7693",
".git/objects/1c/2746f60a6981ab78efaf1584e98981b0c86932": "d15654d291985b941307b652dccc7e2c",
".git/objects/1c/0ce27190686bcdbbbb20af1aa86380eca97a37": "a36f797a9f959b47057ddaf5617e5bd2",
".git/objects/34/0c8919b57041c5b989274be1b631d85ce8c641": "bbd47199ad4866ded0bbe3bb817ab56a",
".git/objects/8f/1587ba5d8421f081d0b253be14cd37ba4e0566": "0bfe1fdb127f94e9997f98f39b02fc76",
".git/objects/ee/75c4d49bda64458c828502c599b7a819cb2133": "6942e28bdb23fd76976da29fedbf1b30",
".git/objects/c2/d004bd3b15c38211b72ffa3d1c3fa449323cc8": "015749b7c771ead423f86a368682851d",
".git/objects/c2/e1cb9c5fb05e19951af0d4b74d1810f54db42f": "5425e139ddb5090d9748e1d50b9baf45",
".git/objects/c2/03679e3b47ce06b0af39edf11f114a646c4828": "4a02f0f725d3b7b4c5b43938e6ccb7ab",
".git/objects/e2/e70838af0c32f79d6f38ac133391c6a79a60b5": "2bb2a6b765d2e313e8526deae0e98a1d",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/2d/46f463afea798dfc6d89f43ae677d20ac64388": "8909fc7edaf1a2a2cca0eaecef3211d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/340f33532cb9070b63226362b6c3097e054e89": "917aed4ace3360fc176f482de4e5ce0d",
".git/objects/81/70958a2b550548a85e6f486c30973ac11a4a98": "9968b7857ad4acd6615c7cc9d4e9e202",
".git/objects/81/77823f3f94977b6161173c760e534d94d2f564": "0e3691cde5f50f85aa730ace2b4faf1c",
".git/objects/4e/f0237449982f1f1fecda520619c25e158583e4": "4631de80f90cc502a460db1a3c36c78a",
".git/objects/c0/db8379817a7df5907f00fe16bdc5ab2a584e11": "c025a332e0319231e821d6709a62a1b0",
".git/objects/8a/15a4f7bd048f79356220859ac314e5f00e058a": "1aaa8cce9efa7e921ab11215c96e9036",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/06/6c92f505bb7c83bab18004815f1e37546bb6c2": "b638ba21b94c4c7993e5536b2db98317",
".git/objects/b2/0f6cda0ceb27b54cf5ce9e6a122dfab3f90db7": "0d0f799c50a958d9a48e7acc20f007e7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/51/3eb058e23671ced08510a30752962cd081f60f": "e1a2a0dede42984d13cafe097a31d73e",
".git/objects/51/666fe4237a117bae9e5df7f59e7a24f203311d": "222e793b1a14267ad7c20f6eace31242",
".git/objects/a4/fdc8664604441f0342d610e0629f7d79957b28": "922a6f3772b07c269f24881a98811f2d",
".git/objects/a4/a855b18fd18175a7bf1d5384da3df3f5bae876": "bf915ab01279b542d4c97ddd13f7879d",
".git/objects/59/bb6e75b4945651b21d16c33b10b80ba5d5c91d": "6cfb6c5fe2568dd2e1319b204153dac0",
".git/objects/59/db4b3affa94e4b0362e0db04b4ae6706eef7f6": "b3d58e79ab488c80117aa35b61b8a165",
".git/objects/bf/907d0a9aeda5e4cb8d5c32961f8260c623caf4": "bcc8271486d8db48e16ca12a22b3361c",
".git/objects/2f/580b70f1ff47317f51becadbb8e26f134a70d3": "75761dd3cb1a3e3fecfe432dc970e468",
".git/objects/91/32edcbd7a7a0df50daf9c8a114b9dc2182e3a0": "2a385a86677498c4888b8f5ce01e9f76",
".git/objects/e1/0fec7cad7103a28a51101ac57df06241bd8198": "20beb362806b91559fe98339838d6793",
".git/objects/71/b215f59d0301cf25e61600de4cba528f779b3f": "3d5fb3ab9aa7525282a550b1c0fa9300",
".git/objects/15/271f7388e1fd415164df2711f062c9293ecd54": "19a88150d9f78c2560ec1db9b79d5b57",
".git/objects/15/ce30175e361038a2fea431734f1ee6daa03369": "38cc4130b4312fdffe7515f76e3510e4",
".git/objects/4b/ca8c7c3745ba87fbc954472b53a5f2ecb909fc": "494416b22d3b6f97b1258e6c75b83e18",
".git/objects/3a/3a3b83d99e81a4427dd35740292e27cfa543b9": "049813260808a3ac4006d957f98bec7d",
".git/objects/89/b3b879025755fe63b576cc4b6f8ce4327c1a81": "6736088c1c302594bf18b4edba3a8049",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/FETCH_HEAD": "1a589226186937f158cc095fa9f97ae4",
".git/refs/remotes/origin/main": "62ff3b869eadfd95108ce5e64702a2cb",
".git/refs/remotes/origin/master": "7b2d4a0b4371318c8f16dc91f1f29a6f",
".git/refs/heads/main": "62ff3b869eadfd95108ce5e64702a2cb",
".git/refs/heads/master": "7b2d4a0b4371318c8f16dc91f1f29a6f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
