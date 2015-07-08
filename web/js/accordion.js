jQuery(document).ready(function() {
  var row = 0,ticketPriceLive=0;

var Ticket = {  
  repository: {},
  createTicket: function(a,b,c,d,e,f,g,i) {
    var id = g;
    var t =  { 'quantity' : a, 'price' : b,'ticketStart':c,'ticketEnd':d ,'ticketMin':e,'ticketMax':f,'feeType':i};
    this.repository[id] = t;
  },
  getTicket: function(id){
    return this.repository[id];
  }
}


  function close_accordion_section() {
    jQuery('.accordion .accordion-section-title').removeClass('active');
    jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
  }
  
$('#addTicket').click(function(e) {
    var isValid = true;
    $('#ticketTypeAcc,#quantityAcc').each(function() {
        if ($.trim($(this).val()) == ''  ) {
            isValid = false;
            $(this).css({
                "border": "1px solid red",
                "background": "#FFCECE"
            });
        } else {
            $(this).css({
                "border": "",
                "background": ""
            });
        }
    });
    if($('#quantityAcc').val() <= 0) {
      isValid = false;
      $('#quantityAcc').css({
          "border": "1px solid red",
          "background": "#FFCECE"
      });
    }

    if (isValid == false) {
        e.preventDefault();
    } 
    else {
        row++;
        jQuery('#accContainer').prepend(jQuery('#addedTickets ').html());
        jQuery('#ticketType').attr("id", "ticketType" + row);
        jQuery('#qnty').attr("id", "qnty" + row);
        jQuery('#opener').attr("id", "opener" + row);
        jQuery('#datetickets-start_sales').attr("id", "datetickets-start_sales" + row);
        jQuery('#datetickets-end_sales').attr("id", "datetickets-end_sales" + row);
        jQuery('#tickets-order_minimum').attr("id", "tickets-order_minimum" + row);
        jQuery('#tickets-order_maximum').attr("id", "tickets-order_maximum" + row);
        jQuery('#ticketsContents').show();
        jQuery('#ticketType' + row).val(jQuery('#ticketTypeAcc').val());
        jQuery('#qnty' + row).val(jQuery('#quantityAcc').val());
        jQuery('#ticketTypeAcc').val('');
        jQuery('#quantityAcc').val('');
    }
});

  



  jQuery('#addTicketPaid').click(function(e) {
    var isValid = true;
    $('#ticketTypePaidAcc,#quantityPaidAcc,#pricePaidAcc').each(function() {
      if ($.trim($(this).val()) == '') {
        isValid = false;
        $(this).css({
          "border": "1px solid red",
          "background": "#FFCECE"
        });
      } else {
        $(this).css({
          "border": "",
          "background": ""
        });
      }
    });
    if($('#quantityPaidAcc').val() <= 0) {
      isValid = false;
      $('#quantityPaidAcc').css({
          "border": "1px solid red",
          "background": "#FFCECE"
      });
    }
    if($('#pricePaidAcc').val() <= 0) {
      isValid = false;
      $('#pricePaidAcc').css({
          "border": "1px solid red",
          "background": "#FFCECE"
      });
    }

    if (isValid == false) {
      e.preventDefault();
    } else {
      row++;
      jQuery('#accContainer').prepend(jQuery('#addedTicketsPaid ').html());
      jQuery('#ticketTypePaid').attr("id", "ticketTypePaid" + row);
      jQuery('#qntyPaid').attr("id", "qntyPaid" + row);
      jQuery('#pricePaid').attr("id", "pricePaid" + row);
      jQuery('#ticketFeeslabel').attr("id", "ticketFeeslabel" + row);
      jQuery('#ticketfeesHidden').attr("id", "ticketfeesHidden" + row);
    
 jQuery('#openerPaid').attr("id", "openerPaid" + row);

      jQuery('#dateticketsPaid-start_sales').attr("id", "dateticketsPaid-start_sales" + row);
  jQuery('#dateticketsPaid-end_sales').attr("id", "dateticketsPaid-end_sales" + row);
  jQuery('#ticketsPaid-order_minimum').attr("id", "ticketsPaid-order_minimum" + row);
  jQuery('#ticketsPaid-order_maximum').attr("id", "ticketsPaid-order_maximum" + row);
 


      jQuery('#paidticketsContents').show();
      jQuery('#ticketTypePaid' + row).val(jQuery('#ticketTypePaidAcc').val());
      jQuery('#qntyPaid' + row).val(jQuery('#quantityPaidAcc').val());
      jQuery('#pricePaid' + row).val(jQuery('#pricePaidAcc').val());
      jQuery('#ticketFeeslabel' + row).text(jQuery("#ticketfeesAcc option:selected").text());

      jQuery('#ticketfeesHidden' + row).val(jQuery("#ticketfeesAcc option:selected").val());

var id='openerPaid'+row;

 Ticket.createTicket(jQuery('#quantityPaidAcc').val(), jQuery('#pricePaidAcc').val(),'','','','',id);


jQuery('#ticketTypePaidAcc').val('');
jQuery('#quantityPaidAcc').val('');
jQuery('#pricePaidAcc').val('');
    }
  });
  jQuery('body').on('click', '.removeTicket', function(e) {
    jQuery(this).parent().remove();
  });



  jQuery('body').on('click', '.settings', function(e) {
 jQuery('#date_tickets-start_sales').val("");
jQuery('#date_tickets-end_sales').val("");
jQuery('#id_group-tickets-order_minimum').val("");
jQuery('#id_group-tickets-order_limit').val("");
jQuery('#id_group-tickets-order_limit').val("");


fee("0");

                jQuery("#dialog").dialog('open');
            






    if (e.target.parentNode.id == "ticketsContents") {
      jQuery(".js-ticket-fees").hide();

var id_new= e.currentTarget.id;

var current_ticket = Ticket.getTicket(id_new);  

ticketPriceLive = current_ticket.price;



   $('#date_tickets-start_sales').val(current_ticket.ticketStart);
    $('#date_tickets-end_sales').val(current_ticket.ticketEnd);
    $('#id_group-tickets-order_minimum').val(current_ticket.ticketMin);
    $('#id_group-tickets-order_limit').val(current_ticket.ticketMax);
    } else {
      jQuery(".js-ticket-fees").show();

var id_new= e.currentTarget.id;

var current_ticket = Ticket.getTicket(id_new);  

ticketPriceLive = current_ticket.price;

fee(current_ticket.feeType.toString());

   $('#date_tickets-start_sales').val(current_ticket.ticketStart);
    $('#date_tickets-end_sales').val(current_ticket.ticketEnd);
    $('#id_group-tickets-order_minimum').val(current_ticket.ticketMin);
    $('#id_group-tickets-order_limit').val(current_ticket.ticketMax);


    }
    
 
  });

 jQuery('body').on('click', '.saveSettings', function(e) {


if($(this).parents().find('#ticketTypePaid'+row).length ==1)
{
   jQuery('#dateticketsPaid-start_sales'+row).val(jQuery('#date_tickets-start_sales').val());
 jQuery('#dateticketsPaid-end_sales'+row).val(jQuery('#date_tickets-end_sales').val());
 jQuery('#ticketsPaid-order_minimum'+row).val(jQuery('#id_group-tickets-order_minimum').val());
 jQuery('#ticketsPaid-order_maximum'+row).val(jQuery('#id_group-tickets-order_limit').val());

var id='openerPaid'+row;

Ticket.createTicket( jQuery('#qntyPaid' + row).val(), jQuery('#pricePaid' + row).val(),jQuery('#date_tickets-start_sales').val(),jQuery('#date_tickets-end_sales').val(),jQuery('#id_group-tickets-order_minimum').val(),jQuery('#id_group-tickets-order_limit').val() , id,$(".ticketfees option:selected").index());

}
else
{

jQuery('#datetickets-start_sales'+row).val(jQuery('#date_tickets-start_sales').val());
 jQuery('#datetickets-end_sales'+row).val(jQuery('#date_tickets-end_sales').val());
 jQuery('#tickets-order_minimum'+row).val(jQuery('#id_group-tickets-order_minimum').val());
 jQuery('#tickets-order_maximum'+row).val(jQuery('#id_group-tickets-order_limit').val());

var id='opener'+row;
Ticket.createTicket(jQuery('#quantityAcc').val(), 'free',jQuery('#date_tickets-start_sales').val(),jQuery('#date_tickets-end_sales').val(),jQuery('#id_group-tickets-order_minimum').val(),jQuery('#id_group-tickets-order_limit').val() , id);

}



// Ticket.createTicket(jQuery('#quantityPaidAcc').val(), jQuery('#pricePaidAcc').val(),'12','12','12','12',id);
jQuery('#date_tickets-start_sales').val("");
jQuery('#date_tickets-end_sales').val("");
jQuery('#id_group-tickets-order_minimum').val("");
jQuery('#id_group-tickets-order_limit').val("");



    jQuery("#dialog").dialog('close');


  });

$('.ticketfees').on('change', function(e) {
   fee(e.currentTarget.selectedIndex.toString());
});
    
    function fee(value)
{
 
  var paymentFees,bookingFees,totalFees, totalBuyersTotal,currency ;

 currency="Rs";

  paymentFees= parseInt(ticketPriceLive  * 0.3);
  bookingFees= parseInt(1 + ticketPriceLive * 0.005);
  totalFees= parseInt(paymentFees + bookingFees); 
  switch(value)
  {
    case "1":
         $('.js-ticket-online-fee-amount').html(currency + " " + parseInt(paymentFees+bookingFees));
         $('.js-ticket-online-total').html(currency + " " + parseInt(totalFees+  parseInt(ticketPriceLive)));
        break;
    case "3":
         $('.js-ticket-online-fee-amount').html(currency + " " +bookingFees);
         $('.js-ticket-online-total').html(currency + " " + parseInt(bookingFees+parseInt(ticketPriceLive)));
        break;
    case "2":
         $('.js-ticket-online-fee-amount').html(currency + " " + 0);
         $('.js-ticket-online-total').html(currency + " " +parseInt(ticketPriceLive));
        break;
    default:
         $('.js-ticket-online-fee-amount').html(currency + " " + '0');
         $('.js-ticket-online-total').html(currency + " " +'0');
        break;
  }
}

  jQuery('.accordion-section-title').click(function(e) {
    var currentAttrValue = jQuery(this).attr('href');
    if (jQuery(e.target).is('.active')) {
      close_accordion_section();
    } else {
      close_accordion_section();
      jQuery(this).addClass('active');
      jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
    }
    e.preventDefault();
  });
});