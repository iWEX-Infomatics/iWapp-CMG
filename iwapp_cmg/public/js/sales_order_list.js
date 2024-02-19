frappe.listview_settings['Sales Order'] = {
    onload: function (listview) {
        $('.btn-primary').hide();
        frappe.msgprint("New Sales Orders shall be created from a submitted Quotation")
    }
};