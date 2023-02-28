*{
	padding : 0px;
	margin : 0px;
	box-sizing : border-box;
}

body{
	 /* background-color : red; */ 
	
	 font-family: 'Roboto', sans-serif;    /*Roboto font is for all text in body...which copied from website google-fonts*/
}


     /*===============================================================================================
	 ||                                                                                             ||
	 ||	                        Section 1st Hero Image                                              ||
	 ||                                                                                             ||
	 ===============================================================================================*/



							/*<!---===============================================
							||         1st Row of Section 1st                 ||
							==============================================------>*/



.heroImage{
	background-color : #fcdb00;  /*Background-color is taken from photoshop eyedrop tool select at bottom left side..*/
	padding : 60px   0     108px    0;       /* Padding is provide only from Top & bottom Side...*/
	/*        Top  Right   Bottom  Left*/
	
}

/*Utility classes the classes which are used to make design of web page that are shifted to helper.css folder..*/

.container{
	width : 1100px;                           /* This is constant CSS for Container....*/
	margin : 0 auto;
}


.row, .row::after, .row::before{              /* This is Constant CSS to the Row */
	display : table;
	clear : both;
	width : 100%;
}

/*.col2, .col5, .col10, .col4{              /* There are 3 col set 1st of 5 col, 2nd Empty col & 3rd OF 5 Col*/
	/* padding : 0 15px;                         /* This is constant CSS For  Row
	float : left;
}*/

div[class^="col"]{                        /* Due to this attribute selector no need of giving CSS to each col*/
	padding : 0 15px;
	float : left;
}
.col1{
	width : calc(100% * 1 / 12);
}

.col5{
	width : calc(100% * 5 /12);
}
.col2{
	width : calc(100% * 2 / 12);
}
.col3{
	width : calc(100% * 3 / 12);
}
.col4{
	width : calc(100% * 4 / 12);
}
.col9{
	width : calc(100% * 9 / 12);
}
.col10{
	width : calc(100% * 10 / 12);
}



a:link, a:visited{              /*If we click on list elememt that is called visited..*/
	text-decoration : none;      /*It Removes undeline from the List Element*/
}

.navbar{
	list-style : none;      /* It removes Dot from List of Items in UL/LI */
}

.navbar li{
	display : inline-block;
										/*Right side margin to Listing elements of 1st section features and all.*/
	min-width : 118px;				
}									


.navbar li:not(:last-child){          /*we dont want margin to the last li element so margin given is 0px*/
	
	margin-right : 15px;			  /*Half padding given to .navbar a & half margin given to the .navbar li a 15px.. */
}

.navbar a{
	
	font-family : PT Sans;          /* By Clicking text we will get these values in Photopea.com website...*/
	font-size : 22px;
	font-weight : bold;
	color : #010101 ;
	text-transform : capitalize;     /* It capitalize the listing Element */
	
	
	padding : 18px;           		  /* This is little Tricky the width between two listing items is 72px 
										so for half margin & padding divide it by 2 so 72/2/2 == 18px
										It check by by ispecting output page...*/
}

.navbar a:hover, .navbar a:active, .navbar a:focus{
	font-weight : lighter;
}


.mb-70{
	margin-bottom : 70px;       /*This is the bottom margin beween features & ipad*/
}


							/*<!---===============================================
							||         2nd Row of Section 1st                 ||
							==============================================------>*/




.features{        /*Background-color is taken from photoshop tool by usnig eyedrop tool select at bottom left side.. */

	background-color : #fcdb00;
	padding : 60px 0 110px 0;
	
}
.heading1{
	font-size : 32px;      /* By Clicking text we will get these values in Photopea.com website...*/
	font-weight : bold;
	color : #010101;
	 font-family: 'Montserrat', sans-serif; 			/*Montserrat font is for all Heading in body...which copied from 
																	website google-fonts*/
	 
	margin-bottom : 20px;   /*This is the space between heading1 & heading2 */
}
.heading2{
	font-size : 20px;
	font-weight : bold;
	color : #313841;
	 font-family: 'Montserrat', sans-serif;              /*Montserrat font is for all Heading in body...which copied from 
																	website google-fonts*/			
	 
	 
	margin-bottom : 22px;    /*This is the space between heading2 & Paragraph */
}
.para{
	font-size : 16px;        /* By Clicking text we will get these values in Photopea.com website...*/
	font-weight : regular;
	color : #555555;
	margin-bottom : 40px;    /*Bottom Margin between para & icon */
}

.inspire{
	margin-top : 72px;      /* This 72px margin is vertical space between ipad & inspire heading */
	margin-left : 0px;
}

.icon-list{
	list-style : none;       /* For Icon Fontawesome website is used */
}

.icon-list li{
	display : inline-block;
	margin-right : 40px;     /* This is the space between Two Icon's*/
}

.icon-list a i{
	font-size : 40px;         /* This is the height icon or size of icon*/
	color : #010101;
}

.ipad{
	margin-left: 16px;        /*This is for exact below posiion of tab with feature support & blog*/
}

.offset-1{
	margin-left : calc(100% * 1 / 12);
}

.offset-2{
	margin-left : calc(100% * 2 / 12);
}





     /*========================================================================================
	 ||                                                                                      ||
	 ||	                        Section 2nd Tinyone Features CSS                             ||
	 ||                                                                                      ||
	 =========================================================================================*/

.features{
	
	background-color : #ffffff;
	padding: 120px 0px 80px 0px;        /*At 1st bottom margin is 170px but after giving margin of 90px to thumb-icon 
											we have to minus 90px from 170px so remaiing is 80px..*/
}


.text-center{
	text-align : center;      /* This is for center positon for Heading & paragraph of Section-2 */
}
.px-50{
	padding : 0 50px;        /* Padding top bottom 0px & left right 50px */
}



.col4, .col10{
	padding : 0 15px;
	float : left;
}
.thumbIcon{                      /* The size & Height of ICON In Section-2nd tinyone features*/
	font-size : 44px;
	font-height : 44px;
}
.mb-90{           				/* The space between section-2nd's subheading & Icon list */
	margin-bottom : 90px;
}
.thumbContent h3{
	font-size : 22px;
	color : 010101;
	margin-bottom : 15px;
	font-family: 'Montserrat', sans-serif;         /*Montserrat font is for all Heading in body...which copied from 
																	website google-fonts*/
}

.thumbContent p{
	font-size : 16px;
	color : #898989;
}
.thumnail{
	margin-bottom : 90px;
}



     /*========================================================================================
	 ||                                                                                      ||
	 ||	                        Section 3rd inTouch CSS                             ||
	 ||                                                                                      ||
	 =========================================================================================*/



.inTouch{
	background-color : #010101;
	padding : 95px 0px 140px 0px;
}

.inTouch h1{
	color :  #fcdb00;
	font-weight : 400px;
}

.inTouch .para{
	color :#898989;
	font-size : 16px;
}

.form-control{
	padding :20px 20px;
	height : 50px;
	border-radius : 5px;
	width : calc(100% - 150px);
	color : #898989;
}
.form-control::placeholder{
	color : orange;
	font-size : 16px;
}

.btn-primary{
	background-color : #fcdb00;
	height : 50px;
	padding : 15px 35px;
	cursor : pointer;
	border-radius : 5px;
	width : 125px;
	margin-left : 20px;
	font-size : 16px;
	
}
.form-group{
	margin-bottom : 80px;
}

.col12{
	width : calc(100% * 12 / 12);
}

.socialIcon li {
	display : inline-block;
	margin-right : 33px;
}

.socialIcon li a {
	color : #fcdb00;
	
}

.socialIcon li i{
	
	font-size : 38px;
}
.mb-120{
	margin-bottom : 120px;
}
.mb-130{
	margin-bottom : 130px;
}

.footerList{

list-style : none;                     /*For removing the dots from thr list we use this css*/
	
	
}


.footerList li, .footerList li a {
	font-size : 16px;
	color : white;
	list-style : none;                     /*For removing the dots from thr list we use this css*/
}























