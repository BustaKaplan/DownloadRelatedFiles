({
	doInit: function(component, event, helper) {
    	var recordId = component.get("v.recordId");
        var action = component.get("c.getRecords");
        var returnValue;
        
        action.setParams({
            recordId: recordId
        });
        //Callback
        var self = this;
        action.setCallback(this,function(response){     
            var state=response.getState();
            var responseValue = response.getReturnValue();
            if(state==="SUCCESS")
			{
     		component.set("v.relatedAttachments", responseValue);
            //Call helper to set base URL
            helper.getBaseUrl(component); 
           	}
       
        });
        $A.enqueueAction(action);
    }
            
})
