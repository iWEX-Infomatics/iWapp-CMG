frappe.ui.form.on("Customer", {
    default_currency: function (frm) {
        // frm.set_value({ "default_price_list": "", "default_currency": "", "tax_category" : ""})
        if (frm.doc.customer_type == "Company") {
            if (frm.doc.default_currency == "TZS") {
                frm.set_value({ "default_price_list": "Selling TZS", "tax_category": "VAT" })
            }
            if (frm.doc.default_currency == "USD") {
                frm.set_value({ "default_price_list": "Selling USD", "tax_category": "Export" })
            }
            if (frm.doc.default_currency == "AED") {
                frm.set_value({ "default_price_list": "Selling AED", "tax_category": "No VAT" })
            }
        }
        else {
            if (frm.doc.default_currency == "TZS") {
                frm.set_value({ "default_price_list": "Selling TZS", "tax_category": "" })
            }
            if (frm.doc.default_currency == "USD") {
                frm.set_value({ "default_price_list": "Selling USD", "tax_category": "" })
            }
            if (frm.doc.default_currency == "AED") {
                frm.set_value({ "default_price_list": "Selling AED", "tax_category": "" })
            }
        }
    },
    custom_country: function (frm) {
        frm.set_value({ "default_price_list": "", "default_currency": "", "tax_category" : ""})
        if (frm.doc.custom_country == "Tanzania") {
            frm.set_value({ "default_price_list": "Selling TZS", "default_currency": "TZS"})
        }
    }
})

// custom_postal_code: function (frm) {
//     frm.clear_table("custom_pincode_details")
//     frm.refresh_fields("custom_pincode_details");
//     if (frm.doc.custom_country == "India" && frm.doc.custom_postal_code) {
//         frappe.db.exists('Pincode', frm.doc.custom_postal_code)
//             .then(exists => {
//                 if (exists) {
//                     frappe.db.get_doc('Pincode', frm.doc.custom_postal_code)
//                         .then(doc => {
//                             if (doc.pincode_details) {
//                                 $.each(doc.pincode_details, function (i, pin) {
//                                     frm.set_value({ "custom_stateprovince": pin.state, "custom_taluk": pin.taluk, "custom_county": pin.district })
//                                 })
//                                 let d = new frappe.ui.Dialog({
//                                     title: 'Select Your Post Office',
//                                     fields: [
//                                         {
//                                             label: 'Post Office',
//                                             fieldname: 'post',
//                                             fieldtype: 'Select',
//                                             options: doc.pincode_details.map(pin => pin.post_office)
//                                         }
//                                     ],
//                                     size: 'small', // small, large, extra-large
//                                     primary_action_label: 'Save',
//                                     primary_action(values) {
//                                         frm.set_value("custom_post_office", values.post)

//                                         d.hide();
//                                     }
//                                 });
//                                 d.show();
//                             }
//                             else {
//                                 frm.set_value({ "custom_stateprovince": "", "custom_taluk": "", "custom_county": "", "custom_post_office":"" })
//                             }
//                         })
//                 }
//                 else {
//                     frappe.call({
//                         method: 'iwapp_com.events.employee.pincode',
//                         args: {
//                             pin: frm.doc.custom_postal_code
//                         },
//                         callback: function (r) {
//                             if (r.message) {
//                                 frm.clear_table("custom_pincode_details")
//                                 $.each(r.message, function (i, pin) {
//                                     frm.set_value({ "custom_stateprovince": pin.State, "custom_taluk": pin.Block, "custom_county": pin.District })
//                                     var child = cur_frm.add_child("custom_pincode_details");
//                                     child.post_office = pin.Name
//                                     child.taluk = pin.Block
//                                     child.division = pin.Division
//                                     child.district = pin.District
//                                     child.state = pin.State
//                                     frm.refresh_fields("custom_pincode_details");
//                                 })
//                                 let d = new frappe.ui.Dialog({
//                                     title: 'Select Your Post Office',
//                                     fields: [
//                                         {
//                                             label: 'Post Office',
//                                             fieldname: 'post',
//                                             fieldtype: 'Select',
//                                             options: r.message.map(pin => pin.Name)
//                                         }
//                                     ],
//                                     size: 'small', // small, large, extra-large
//                                     primary_action_label: 'Save',
//                                     primary_action(values) {
//                                         frm.set_value("custom_post_office", values.post)

//                                         d.hide();
//                                     }
//                                 });
//                                 d.show();
//                             }
//                             else {
//                                 frm.set_value({ "custom_stateprovince": "", "custom_taluk": "", "custom_county": "", "custom_post_office": "" })
//                             }
//                         }
//                     })
//                 }
//             })
//     }
