var botui = new BotUI('delivery-bot'),
    address = 'House 1, First Ave.';
	
botui.message.bot('Hi, User. My name is Azroid. Lets get started!!')
  
var welcome_bot = function () {
    botui.message
    .bot({
      delay: 2000,
      content: 'Choose any one of the following options to continue:'
    })
  .then(function () {
    return botui.action.button({
      delay: 500,
      addMessage: false, // so we could the address in message instead if 'Existing Address'
      action: [{
        text: 'About DIA',
        value: 'about_dia',
		anwaer:'andbsdsjddsj'
      },{
        text: 'How to navigate DIA',
        value: 'navigate'
      },{
        text: 'Features of DIA',
        value: 'features_of_DIA'
      }]
    })
}).then(function (res) {
	debugger
	console.log(res);
  if(res.value == 'navigate') {
	replyByHuman(res);
    askForHelp();
  }else  if(res.value == 'features_of_DIA') {
	replyByHuman(res);
    askForFeatureofdia();
  }else  if(res.value == 'about_dia') {
		replyByHuman(res);
		replyByBot("EY DIA is a data analytics tool which can help clients gain more insights into their data with respect to third-party due diligence, audit related analysis, Fraud analytics and AML")
    askForAboutDIA();
  }
  else {
	replyByHuman(res);
	end();
  }
});
};

var askForHelp = function () {
  botui.message
    .bot({
      delay: 2000,
      content: 'Choose any one of the following options to continue:'
    })
    .then(function () {
      return botui.action.button({
		delay: 1000,
		  addMessage: false, // so we could the address in message instead if 'Existing Address'
		  action: [{
			text: 'Data Recieved',
			value: 'datarecieved'
		  },{
			text: 'Data Completeness',
			value: 'data_completeness_check'
		  },{
			text: 'Data Quality',
			value: 'data_quality'
		  }, {
			text: 'Workplan',
			value: 'workplan'
		  }, {
			text: 'Process Insights',
			value: 'process_insights'
		  }, {
			text: 'Case Management',
			value: 'casemanagement'
		  }, {
			text: 'Home',
			value: 'home'
		  }]
      })
    }).then(function (res) {
      if(res.value == 'datarecieved') {
			replyByHuman(res);
			// replyByBot("Comprehensive View of the data showing type of data received");
			// replyByBot("Time trend of data showing time period of received data");
			// replyByBot("Details of attributes with reconciliation numbers between source data and loaded data");
			replyByBot("<ul><li>Comprehensive View of the data showing type of data received</li><li>Time trend of data showing time period of received data</li><li>Details of attributes with reconciliation numbers between source data and loaded data</li></ul>")
			askForHelp();
      } else if(res.value == 'data_quality') {
			replyByHuman(res);
			replyByBot('Checks the Quality of data and identifies if a specific analytic would be appropriate during review or not')
			replyByBot('Has a detailed view of the data by table name and its attributes for all major ERP System')
			replyByBot('Identifies details like blanks, nulls, date ranges and amount ranges for specific attributes for a comprehensive view')
			askForHelp();
      }else if(res.value == 'data_completeness_check') {
			replyByHuman(res);
			replyByBot('Before running Analytics, EY DIA performs Validations to check for anomalies in the data')
			replyByBot('Notifies the user that there maybe missing data and therefore certain analytics may not be applicable')
			replyByBot('Summarizes the validation results at a summary level and can be drilled down to specific transactions')
			askForHelp();
      }else if(res.value == 'workplan') {
			replyByHuman(res);
			replyByBot('EY DIA has a repository of 1200+ Analytics under numerous modules like P2P, Payroll, T&E etc.')
			replyByBot('Each Module consists of sub modules which allows users to focus on specific areas of analysis')
			replyByBot('EY DIA allows all major modules from major Financial ERP Systems to be easily integrated and analysed')
			askForHelp();
      }else if(res.value == 'process_insights') {
			replyByHuman(res);
			replyByBot('Process Insights allows the user to view Analytic Results by Module and sub-Module.')
			replyByBot('The user can drill-down to the specific test to view results')
			replyByBot('The graphical interface on the screen gives a seamless drill-down functionality to the user and allows him to navigate as per his need to reach a test most important to his analysis')
			askForHelp();
      }else if(res.value == 'casemanagement') {
			replyByHuman(res);
			// botui.message.add({
			  // delay: 1200,
			  // type: 'embed',
			  // content: 'camemanagement.png'
			// });
			replyByBot('![camemanagement](camemanagement.png)')
			replyByBot("<ol><li>For a pattern, the user can create a case by selecting certain transactions</li><li>The reviewer logs in and can see the case in his bucket to approve or reject</li><li>The reviewer can Approve / Reject the case </li><li>Cases can be created from the Visualization Module by filtering the data and selecting transactions</li></ol>")
			askForHelp();
      }else if(res.value == 'home') {
			replyByHuman(res);
			welcome_bot();
      } else {
				botui.message.add({
			  delay: 1200,
			  type: 'embed',
			  content: '01.jpg'
			});
        askAddress();
      }
    });
}

var replyByBot = function(res){
	botui.message.add({
	  delay: 1000,
	  loading: true,
	  content: res
	});
}
var askForFeatureofdia = function () {
  botui.message
    .bot({
      delay: 500,
      content: 'Choose any one of the following options to continue:'
    })
    .then(function () {
      return botui.action.button({
		delay: 1000,
		  addMessage: false, // so we could the address in message instead if 'Existing Address'
		  action: [{
			text: 'Auto Case Creation',
			value: 'auto_cases'
		  },{
			text: 'Query Bulider',
			value: 'query_bulider'
		  },{
			text: 'Multi dimensional analysis',
			value: 'multi_dimensional_analysis'
		  }, {
			text: 'Entity Profiling',
			value: 'entity_profiling'
		  },{
			text: 'Modules',
			value: 'modules'
		  }, {
			text: 'Home',
			value: 'home'
		  }]
      })
    }).then(function (res) {
		if(res.value == 'auto_cases') {
			replyByHuman(res);
			replyByBot('EY DIA has the capability to auto create cases based on the number of patterns by module. This allows the user to save time while manually creating cases and instead can directly review the auto created cases to concentrate on specific tests of his interest')
			replyByBot('The user can select the number of Analytics per case, choose the Analytics and execute the engine to create the cases automatically. One case per combination will get created ')
			askForFeatureofdia();
      }else if(res.value == 'entity_profiling') {
			replyByHuman(res);
			replyByBot();
			askForFeatureofdia();
      }else if(res.value == 'query_bulider') {
			replyByHuman(res);
			replyByBot();
			askForFeatureofdia();
      }else if(res.value == 'multi_dimensional_analysis') {
			replyByHuman(res);
			replyByBot();
			askForFeatureofdia();
      }else if(res.value == 'modules') {
			replyByHuman(res);
			replyByBot();
			askForFeatureofdia();
      } else if(res.value == 'home') {
			replyByHuman(res);
			welcome_bot();
      } else {
       botui.message
        .bot({
          delay: 500,
          content: res.text
        });
		end();
      }
    });
}


var askForAboutDIA = function () {
  botui.message
    .bot({
      delay: 2000,
      content: 'Choose any one of the following options to continue:'
    })
    .then(function () {
      return botui.action.button({
		delay: 500,
		  addMessage: false, // so we could the address in message instead if 'Existing Address'
		  action: [{
			text: 'Is DIA customizable?',
			value: 'howdiaworks'
		  },{
			text: 'Technologies of DIA',
			value: 'technology_used'
		  },{
			text: 'DIA Security',
			value: 'is_DIA_secure'
		  }, {
			text: 'Modules of DIA',
			value: 'modules'
		  },{
			text: 'Advantages of DIA',
			value: 'advantage'
		  },{
			text: 'Fraud domains where DIA can be used',
			value: 'dia_analytics'
		  },{
			text: 'Home',
			value: 'home'
		  }]
      })
    }).then(function (res) {
		if(res.value == 'howdiaworks') {
			replyByHuman(res);
			replyByBot('Yes,DIA is  most flexible and customizable to incorporate large data volumes from disparate sources / ERP systems')
		askForAboutDIA();	
      }else if(res.value == 'is_DIA_secure') {
			replyByHuman(res);
			replyByBot('Yes, DIA is accessible only to the client in a local network to eliminate any confidentiality breach')
			askForAboutDIA();	
      } else if(res.value == 'technology_used') {
			replyByHuman(res);
			replyByBot('DIA is built on one of the latest technologies using Electron-Atom with support for MS SQL Server for the back-end')
		askForAboutDIA();	
      }  else if(res.value == 'modules') {
			replyByHuman(res);
			// replyByBot('Procurement')
			// replyByBot('Payroll')
			// replyByBot('G/L Analytics')
			// replyByBot('Grants / Sponsorships')
			// replyByBot('Travel & Entertainment')
			// replyByBot('AML\Sanctions')
			
			replyByBot('Procurement <br/>Payroll <br/>G/L Analytics <br/>Grants / Sponsorships <br/>Travel & Entertainment <br/>AML & Sanctions <br/> DMS ')
			replyByBot('There are more modules currently being added to DIA')
			askForAboutDIA();	
      }  else if(res.value == 'advantage') {
			replyByHuman(res);
			replyByBot("<ul><li>Is a desktop application which can be hosted on a stand alone system and can be accessed by multiple reviewers.</li><li>Will have a library built for all the leading ERP systems which will help in increasing the turn over time and improve the accuracy of the results. </li><li>The tool is customizable based on the client requirements. We can add additional fraud scenarios apart from the existing 500+ patterns.</li><li>Has integrated tableau dash boarding with drill down capability and perform multi dimensional analytics</li><li>Risk scoring algorithm helps the reviewers/clients to focus on the  high risk profiles/transactions flagged by the tool. User has the ability to enable/disable the analytics.</li><li>Integrated case management will help the management in overseeing the review, manage workload and identify trends. </li></ul>")
		askForAboutDIA();	
      }  else if(res.value == 'technology_used') {
			replyByHuman(res);
			replyByBot('AML\Sanctions')
		askForAboutDIA();	
      }  else if(res.value == 'dia_analytics') {
			replyByHuman(res);
			replyByBot("<ul><li>FCPA analytics</li><li>Anti-Money laundering </li><li>Variance analytics </li><li>Fraud Investigations </li><li>E-discovery analytics</li><li>Text Mining </li></ul>");
		askForAboutDIA();	
      }  else if(res.value == 'home') {
			replyByHuman(res);
			welcome_bot();
      } 
	  else {
       botui.message
        .bot({
          delay: 500,
          content: res.text
        });
		end();
      }
    });
}
var replyByHuman = function (res) {
	botui.message.human({
	  delay: 500,
	  content: res.text
	});
}


var askAddress = function () {
  botui.message
    .bot({
      delay: 500,
      content: 'Please write your address below:'
    })
    .then(function () {
      return botui.action.text({
        delay: 1000,
        action: {
          size: 30,
          icon: 'map-marker',
          value: address, // show the saved address if any
          placeholder: 'Address'
        }
      })
    }).then(function (res) {
      botui.message
        .bot({
          delay: 500,
          content: 'New address: ' + res.value
        });

      address = res.value; // save address

      return botui.action.button({
        delay: 1000,
        action: [{
          icon: 'check',
          text: 'Confirm',
          value: 'confirm'
        }, {
          icon: 'pencil',
          text: 'Edit',
          value: 'edit'
        }]
      })
    }).then(function (res) {
      if(res.value == 'confirm') {
        end();
      } else {
        askAddress();
      }
    });
}

var end = function () {
  botui.message
    .bot({
      delay: 1000,
      content: 'Thank you.'
    });
	welcome_bot();
}
welcome_bot();
