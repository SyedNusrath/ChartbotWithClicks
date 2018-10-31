//Reading file from local
// $.getJSON("bot.json", function(json) {
	// debugger
    // console.log(json); // this will show the info it in firebug console
// });

var data ={"home":[{"text":"About DIA","value":"about_dia"},{"text":"How to navigate DIA","value":"navigate"},{"text":"Features of DIA","value":"features_of_DIA"}],"about_dia":[{"text":"What is DIA?","value":"whatDIA"},{"text":"Is DIA customizable?","value":"howdiaworks"},{"text":"Technologies of DIA","value":"technology_used"},{"text":"DIA Security","value":"is_DIA_secure"},{"text":"Modules of DIA","value":"modules"},{"text":"Advantages of DIA","value":"advantage"},{"text":"Fraud domains where DIA can be used","value":"dia_analytics"},{"text":"Home","value":"home"}],"navigate":[{"text":"Data Recieved","value":"datarecieved"},{"text":"Data Completeness","value":"data_completeness_check"},{"text":"Data Quality","value":"data_quality"},{"text":"Workplan","value":"workplan"},{"text":"Process Insights","value":"process_insights"},{"text":"Case Management","value":"casemanagement"},{"text":"Home","value":"home"}],"features_of_DIA":[{"text":"Auto Case Creation","value":"auto_cases"},{"text":"Query Bulider","value":"query_bulider"},{"text":"Multi dimensional analysis","value":"multi_dimensional_analysis"},{"text":"Entity Profiling","value":"entity_profiling"},{"text":"Modules","value":"modules"},{"text":"Home","value":"home"}],"whatDIA":"EY DIA is a data analytics tool which can help clients gain more insights into their data with respect to third-party due diligence, audit related analysis, Fraud analytics and AML","howdiaworks":"Yes,DIA is  most flexible and customizable to incorporate large data volumes from disparate sources / ERP systems","is_DIA_secure":"Yes, DIA is accessible only to the client in a local network to eliminate any confidentiality breach","technology_used":"DIA is built on one of the latest technologies using Electron-Atom with support for MS SQL Server for the back-end","modules":["Procurement <br/>Payroll <br/>G/L Analytics <br/>Grants / Sponsorships <br/>Travel & Entertainment <br/>AML & Sanctions <br/> DMS ","There are more modules currently being added to DIA"],"advantage":"<ul><li>Is a desktop application which can be hosted on a stand alone system and can be accessed by multiple reviewers.</li><li>Will have a library built for all the leading ERP systems which will help in increasing the turn over time and improve the accuracy of the results. </li><li>The tool is customizable based on the client requirements. We can add additional fraud scenarios apart from the existing 500+ patterns.</li><li>Has integrated tableau dash boarding with drill down capability and perform multi dimensional analytics</li><li>Risk scoring algorithm helps the reviewers/clients to focus on the  high risk profiles/transactions flagged by the tool. User has the ability to enable/disable the analytics.</li><li>Integrated case management will help the management in overseeing the review, manage workload and identify trends. </li></ul>","dia_analytics":"<ul><li>FCPA analytics</li><li>Anti-Money laundering </li><li>Variance analytics </li><li>Fraud Investigations </li><li>E-discovery analytics</li><li>Text Mining </li></ul>","datarecieved":"<ul><li>Comprehensive View of the data showing type of data received</li><li>Time trend of data showing time period of received data</li><li>Details of attributes with reconciliation numbers between source data and loaded data</li></ul>","data_quality":["Checks the Quality of data and identifies if a specific analytic would be appropriate during review or not","Has a detailed view of the data by table name and its attributes for all major ERP System","Identifies details like blanks, nulls, date ranges and amount ranges for specific attributes for a comprehensive view"],"data_completeness_check":["Before running Analytics, EY DIA performs Validations to check for anomalies in the data","Notifies the user that there maybe missing data and therefore certain analytics may not be applicable","Summarizes the validation results at a summary level and can be drilled down to specific transactions"],"workplan":["EY DIA has a repository of 1200+ Analytics under numerous modules like P2P, Payroll, T&E etc.","Each Module consists of sub modules which allows users to focus on specific areas of analysis","EY DIA allows all major modules from major Financial ERP Systems to be easily integrated and analysed"],"process_insights":["Process Insights allows the user to view Analytic Results by Module and sub-Module.","The user can drill-down to the specific test to view results","The graphical interface on the screen gives a seamless drill-down functionality to the user and allows him to navigate as per his need to reach a test most important to his analysis"],"casemanagement":"<ol><li>For a pattern, the user can create a case by selecting certain transactions</li><li>The reviewer logs in and can see the case in his bucket to approve or reject</li><li>The reviewer can Approve / Reject the case </li><li>Cases can be created from the Visualization Module by filtering the data and selecting transactions</li></ol>"}
 
console.log(data)
var botui = new BotUI('delivery-bot');
botui.message.bot('Hi, User. My name is Azroid. Lets get started!!')

var prekey="";

function build_bot(home) {
    botui.message
    .bot({
      delay: 2000,
      content: 'Choose any one of the following options to continue:'
    })
  .then(function () {
	  debugger
    return botui.action.button({
      delay: 500,
      addMessage: false, // so we could the address in message instead if 'Existing Address'
      action: home
    })
}).then(function (res) {
	var jsonData = data;
	$.each( jsonData, function( key, val ) {
		
	   if(res.value == key){
		   debugger
		   replyByHuman(res);
			
			if (typeof val === "string"){
				replyByBot(val);		
				build_bot(eval("data."+prekey));
			}else if(Array.isArray(val)){
				if (typeof val[0] === "object"){
					build_bot(val);
					prekey = key;
				}else{
					for(var j=0;j<val.length;j++){
						replyByBot(val[j]);
					}
				build_bot(eval("data."+prekey));
				}
			}else{
				end();
			}
	   }
  });
});
};

build_bot(data.home)

var replyByBot = function(res){
	botui.message.add({
	  delay: 1000,
	  loading: true,
	  content: res
	});
}
var replyByHuman = function (res) {
	botui.message.human({
	  delay: 500,
	  content: res.text
	});
}

var end = function () {
  botui.message
    .bot({
      delay: 1000,
      content: 'Thank you.'
    });
	build_bot(data.home);
}
