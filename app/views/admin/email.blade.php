@extends('admin.pageshell')


@section('content')



<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Email Configurations</h2>
						
					</div>

					@if(Session::has('email_config'))
			
						<div class="alert alert-success">
							<button type="button" class="close" data-dismiss="alert">×</button>
							Settings have been updated
						</div>
					@endif

					@if(Session::has('errors'))
                            <div class="alert alert-error">
							<button type="button" class="close" data-dismiss="alert">×</button>
							Enter All the Data
						</div>
					@endif 

					<div class="box-content">
						<form class="form-horizontal" action="{{URL::to('/admin/emailconfig')}}" method="post">
							<fieldset>
							  <div class="control-group">
								<label class="control-label" for="focusedInput">Host</label>
								<div class="controls">
									<input type="text" class="input-xlarge focused" name="host" id="host" value="{{$host}}"/>
								</div>
							  </div>
							 
							  <div class="control-group">
								<label class="control-label">Port</label>
								<div class="controls">
									<input type="text" class="m-wrap" name="port" id="port" value="{{$port}}"/>
								</div>
							</div>

							<div class="control-group">
								<label class="control-label">From UserName</label>
								<div class="controls">
									<input type="text" class="input-xlarge focused" name="from_username" id="encryption" value="{{$from_username}}"/>
								</div>
							</div>
											
							<div class="control-group">
								<label class="control-label">Password</label>
								<div class="controls">
									<input type="password" class="input-xlarge focused" name="password" id="password" value="{{$password}}"/>
								</div>
							</div>
											
							<div class="control-group">
								<label class="control-label">Encryption</label>
								<div class="controls">
									<input type="text" class="input-xlarge focused" name="encryption" id="encryption" value="{{$encryption}}"/>
								</div>
							</div>
											
							<div class="control-group">
								<label class="control-label">From Email</label>
								<div class="controls">
									<input type="text" class="input-xlarge focused" name="from_email" id="encryption" value="{{$from_email}}"/>
								</div>
							</div>
							  
							  <div class="form-actions">
								<button type="submit" class="btn btn-primary">Save changes</button>
							  </div>
							</fieldset>
						  </form>

					</div>
				</div><!--/span-->
			
			</div><!--/row-->



<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Forgot Password Email Content</h2>
						
					</div>

					@if(Session::has('forgot_pwd_content'))
			
						<div class="alert alert-success">
							<button type="button" class="close" data-dismiss="alert">×</button>
							Email Content have been updated
						</div>
					@endif
					<p><b>When a user clicks forgot password</b></p> 
					<div class="box-content">
						<form class="form-horizontal" action="{{URL::to('/admin/forgotpasswordemail')}}" method="post">
							<fieldset>
								<div class="control-group">
									<label class="control-label">Subject : </label>
									<div class="controls">
										<input type="text" class="input-xlarge focused" name="forgotpasswordemailsubject" id="encryption" value="{{$forgotpasswordemailsubject}}"/>
									</div>
								</div>

								<div class="control-group">
									<label class="control-label">Content : </label>
									<div class="controls">
										<textarea class="span8 m-wrap" rows="3" name="forgotpasswordemail">{{$forgotpasswordemail}}</textarea>
										</br><b>Type [username] to print the user name. </b>
										</br><b>Type [site_link] to give a link to the user.</b>
										</br><b>Type [password_link] to print the password reset link</b> 
									</div>
								</div>
							  <div class="form-actions">
								<button type="submit" class="btn btn-primary">Save changes</button>
							  </div>
							</fieldset>
						  </form>
					</div>
				</div><!--/span-->
			
			</div><!--/row-->



<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Email Verification Email Content</h2>
						
					</div>

					@if(Session::has('email_verification_content'))
			
						<div class="alert alert-success">
							<button type="button" class="close" data-dismiss="alert">×</button>
							Email Content have been updated
						</div>
					@endif
					<p><b>When a new user registers</b></p> 
					<div class="box-content">
						<form class="form-horizontal" action="{{URL::to('/admin/emailverificationemail')}}" method="post">
							<fieldset>
								<div class="control-group">
									<label class="control-label">Subject : </label>
									<div class="controls">
										<input type="text" class="input-xlarge focused" name="emailverificationemailsubject" id="encryption" value="{{$emailverificationemailsubject}}"/>
									</div>
								</div>

								<div class="control-group">
									<label class="control-label">Content : </label>
									<div class="controls">
										<textarea class="span8 m-wrap" rows="3" name="emailverificationemail">{{$emailverificationemail}}</textarea>
										</br><b>Type [username] to print the user name. </b>
										</br><b>Type [site_link] to give a link to the user.</b>
										</br><b>Type [verification_no] to print the verification number.</b> 
									</div>
								</div>
							  <div class="form-actions">
								<button type="submit" class="btn btn-primary">Save changes</button>
							  </div>
							</fieldset>
						  </form>
					</div>
				</div><!--/span-->
			</div><!--/row-->



<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Disable User Email Content</h2>
						
					</div>

					@if(Session::has('disable_user_content'))
			
						<div class="alert alert-success">
							<button type="button" class="close" data-dismiss="alert">×</button>
							Email Content have been updated
						</div>
					@endif
					<p><b>Administrator disables a  user</b></p> 
					<div class="box-content">
						<form class="form-horizontal" action="{{URL::to('/admin/disableuseremail')}}" method="post">
							<fieldset>
								<div class="control-group">
									<label class="control-label">Subject : </label>
									<div class="controls">
										<input type="text" class="input-xlarge focused" name="disableuseremailsubject" id="encryption" value="{{$disableuseremailsubject}}"/>
									</div>
								</div>

								<div class="control-group">
									<label class="control-label">Content : </label>
									<div class="controls">
										<textarea class="span8 m-wrap" rows="3" name="disableuseremail">{{$disableuseremail}}</textarea>
										</br><b>Type [username] to print the user name. </b>
										</br><b>Type [site_link] to give a link to the user.</b>
									</div>
								</div>
							  <div class="form-actions">
								<button type="submit" class="btn btn-primary">Save changes</button>
							  </div>
							</fieldset>
						  </form>
					</div>
				</div><!--/span-->
			
			</div><!--/row-->


<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Enable User Email Content</h2>
						
					</div>

					@if(Session::has('enable_user_content'))
			
						<div class="alert alert-success">
							<button type="button" class="close" data-dismiss="alert">×</button>
							Email Content have been updated
						</div>
					@endif
					<p><b>Administrator enables a  user</b></p> 
					<div class="box-content">
						<form class="form-horizontal" action="{{URL::to('/admin/enableuseremail')}}" method="post">
							<fieldset>
								<div class="control-group">
									<label class="control-label">Subject : </label>
									<div class="controls">
										<input type="text" class="input-xlarge focused" name="enableuseremailsubject" id="encryption" value="{{$enableuseremailsubject}}"/>
									</div>
								</div>

								<div class="control-group">
									<label class="control-label">Content : </label>
									<div class="controls">
										<textarea class="span8 m-wrap" rows="3" name="enableuseremail">{{$enableuseremail}}</textarea>
										</br><b>Type [username] to print the user name. </b>
										</br><b>Type [site_link] to give a link to the user.</b>
									</div>
								</div>
							  <div class="form-actions">
								<button type="submit" class="btn btn-primary">Save changes</button>
							  </div>
							</fieldset>
						  </form>
					</div>
				</div><!--/span-->
			
			</div><!--/row-->



<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Disable Event Email Content</h2>
						
					</div>

					@if(Session::has('disable_event_content'))
			
						<div class="alert alert-success">
							<button type="button" class="close" data-dismiss="alert">×</button>
							Email Content have been updated
						</div>
					@endif
					<p><b>Administrator disables a event</b></p> 
					<div class="box-content">
						<form class="form-horizontal" action="{{URL::to('/admin/disableeventemail')}}" method="post">
							<fieldset>
								<div class="control-group">
									<label class="control-label">Subject : </label>
									<div class="controls">
										<input type="text" class="input-xlarge focused" name="disableeventemailsubject" id="encryption" value="{{$disableeventemailsubject}}"/>
									</div>
								</div>

								<div class="control-group">
									<label class="control-label">Content : </label>
									<div class="controls">
										<textarea class="span8 m-wrap" rows="3" name="disableeventemail">{{$disableeventemail}}</textarea>
										</br><b>Type [username] to print the user name. </b>
										</br><b>Type [eventname] to print the event name. </b>
										</br><b>Type [site_link] to give a link to the user.</b>
									</div>
								</div>
							  <div class="form-actions">
								<button type="submit" class="btn btn-primary">Save changes</button>
							  </div>
							</fieldset>
						  </form>
					</div>
				</div><!--/span-->
			
			</div><!--/row-->


<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Enable Event Email Content</h2>
						
					</div>

					@if(Session::has('enable_event_content'))
			
						<div class="alert alert-success">
							<button type="button" class="close" data-dismiss="alert">×</button>
							Email Content have been updated
						</div>
					@endif
					<p><b>Administrator enables a event</b></p> 
					<div class="box-content">
						<form class="form-horizontal" action="{{URL::to('/admin/enableeventemail')}}" method="post">
							<fieldset>
								<div class="control-group">
									<label class="control-label">Subject : </label>
									<div class="controls">
										<input type="text" class="input-xlarge focused" name="enableeventemailsubject" id="encryption" value="{{$enableeventemailsubject}}"/>
									</div>
								</div>

								<div class="control-group">
									<label class="control-label">Content : </label>
									<div class="controls">
										<textarea class="span8 m-wrap" rows="3" name="enableeventemail">{{$enableeventemail}}</textarea>
										</br><b>Type [username] to print the user name. </b>
										</br><b>Type [eventname] to print the event name. </b>
										</br><b>Type [site_link] to give a link to the user.</b>
									</div>
								</div>
							  <div class="form-actions">
								<button type="submit" class="btn btn-primary">Save changes</button>
							  </div>
							</fieldset>
						  </form>
					</div>
				</div><!--/span-->
			
			</div><!--/row-->



			<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Contact Organizer Email Content</h2>
						
					</div>

					@if(Session::has('contact_organizer_content'))
			
						<div class="alert alert-success">
							<button type="button" class="close" data-dismiss="alert">×</button>
							Email Content have been updated
						</div>
					@endif
					<p><b>When a user clicks on contact organizer</b></p> 
					<div class="box-content">
						<form class="form-horizontal" action="{{URL::to('/admin/contactorganizeremail')}}" method="post">
							<fieldset>
								<div class="control-group">
									<label class="control-label">Subject : </label>
									<div class="controls">
										<input type="text" class="input-xlarge focused" name="contactorganizeremailsubject" id="encryption" value="{{$contactorganizeremailsubject}}"/>
									</div>
								</div>

								<div class="control-group">
									<label class="control-label">Content : </label>
									<div class="controls">
										<textarea class="span8 m-wrap" rows="3" name="contactorganizeremail">{{$contactorganizeremail}}</textarea>
										</br><b>Type [username] to print the user name. </b>
										</br><b>Type [user_email] to the email of user.</b>
										</br><b>Type [organizername] to print the organizer name. </b>
										</br><b>Type [message] to print the message. </b>
										</br><b>Type [site_link] to give a link to the user.</b>
									</div>
								</div>
							  <div class="form-actions">
								<button type="submit" class="btn btn-primary">Save changes</button>
							  </div>
							</fieldset>
						  </form>
					</div>
				</div><!--/span-->
			
			</div><!--/row-->


<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Admin Payout Email Content</h2>
						
					</div>

					@if(Session::has('admin_payout_content'))
			
						<div class="alert alert-success">
							<button type="button" class="close" data-dismiss="alert">×</button>
							Email Content have been updated
						</div>
					@endif
					<p><b>When an admin clicks on payout for a user in admin panel</b></p> 
					<div class="box-content">
						<form class="form-horizontal" action="{{URL::to('/admin/adminpayoutemail')}}" method="post">
							<fieldset>
								<div class="control-group">
									<label class="control-label">Subject : </label>
									<div class="controls">
										<input type="text" class="input-xlarge focused" name="adminpayoutemailsubject" id="encryption" value="{{$adminpayoutemailsubject}}"/>
									</div>
								</div>

								<div class="control-group">
									<label class="control-label">Content : </label>
									<div class="controls">
										<textarea class="span8 m-wrap" rows="3" name="adminpayoutemail">{{$adminpayoutemail}}</textarea>
										</br><b>Type [username] to print the user name. </b>
										</br><b>Type [amount] to print the amount paid. </b>
										</br><b>Type [site_link] to give a link to the user.</b>
									</div>
								</div>
							  <div class="form-actions">
								<button type="submit" class="btn btn-primary">Save changes</button>
							  </div>
							</fieldset>
						  </form>
					</div>
				</div><!--/span-->
			
			</div><!--/row-->



<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Tickets Sold Email Content</h2>
						
					</div>

					@if(Session::has('ticket_sold_content'))
			
						<div class="alert alert-success">
							<button type="button" class="close" data-dismiss="alert">×</button>
							Email Content have been updated
						</div>
					@endif
					<p><b>When someone buys a ticket for your event</b></p> 
					<div class="box-content">
						<form class="form-horizontal" action="{{URL::to('/admin/ticketsoldemail')}}" method="post">
							<fieldset>
								<div class="control-group">
									<label class="control-label">Subject : </label>
									<div class="controls">
										<input type="text" class="input-xlarge focused" name="ticketsoldemailsubject" id="encryption" value="{{$ticketsoldemailsubject}}"/>
									</div>
								</div>

								<div class="control-group">
									<label class="control-label">Content : </label>
									<div class="controls">
										<textarea class="span8 m-wrap" rows="3" name="ticketsoldemail">{{$ticketsoldemail}}</textarea>
										</br><b>Type [username] to print the user name. </b>
										</br><b>Type [buyer_name] to print the buyers name. </b>
										</br><b>Type [eventname] to print the event name. </b>
										</br><b>Type [buyer_email] to print the email id of the buyer.</b>
										</br><b>Type [transaction_id] to print the transcation id if its a paid ticket. </b>
										</br><b>Type [booking_id] to print the booking id for the tcikets. </b>
										</br><b>Type [notickets] to print the number of tickets sold. </b>
										</br><b>Type [site_link] to give a link to the user.</b>
									</div>
								</div>
							  <div class="form-actions">
								<button type="submit" class="btn btn-primary">Save changes</button>
							  </div>
							</fieldset>
						  </form>
					</div>
				</div><!--/span-->
			
			</div><!--/row-->


<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Buys Ticket Email Content</h2>
						
					</div>

					@if(Session::has('buy_ticket_content'))
			
						<div class="alert alert-success">
							<button type="button" class="close" data-dismiss="alert">×</button>
							Email Content have been updated
						</div>
					@endif
					<p><b>When someone buys a ticket</b></p> 
					<div class="box-content">
						<form class="form-horizontal" action="{{URL::to('/admin/buyticketemail')}}" method="post">
							<fieldset>
								<div class="control-group">
									<label class="control-label">Subject : </label>
									<div class="controls">
										<input type="text" class="input-xlarge focused" name="buyticketemailsubject" id="encryption" value="{{$buyticketemailsubject}}"/>
									</div>
								</div>

								<div class="control-group">
									<label class="control-label">Content : </label>
									<div class="controls">
										<textarea class="span8 m-wrap" rows="3" name="buyticketemail">{{$buyticketemail}}</textarea>
										</br><b>Type [username] to print the user name. </b>
										</br><b>Type [eventname] to print the event name. </b>
										</br><b>Type [transaction_id] to print the transcation id if its a paid ticket. </b>
										</br><b>Type [booking_id] to print the booking id for the tcikets. </b>
										</br><b>Type [notickets] to print the number of tickets bought. </b>
										</br><b>Type [site_link] to give a link to the user.</b>
									</div>
								</div>
							  <div class="form-actions">
								<button type="submit" class="btn btn-primary">Save changes</button>
							  </div>
							</fieldset>
						  </form>
					</div>
				</div><!--/span-->
			
			</div><!--/row-->

	<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Event Create Email Content</h2>
						
					</div>

					@if(Session::has('create_event_content'))
			
						<div class="alert alert-success">
							<button type="button" class="close" data-dismiss="alert">×</button>
							Email Content have been updated
						</div>
					@endif
					<p><b>User creates an event</b></p> 
					<div class="box-content">
						<form class="form-horizontal" action="{{URL::to('/admin/createeventemail')}}" method="post">
							<fieldset>
								<div class="control-group">
									<label class="control-label">Subject : </label>
									<div class="controls">
										<input type="text" class="input-xlarge focused" name="createeventemailsubject" id="encryption" value="{{$createeventemailsubject}}"/>
									</div>
								</div>

								<div class="control-group">
									<label class="control-label">Content : </label>
									<div class="controls">
										<textarea class="span8 m-wrap" rows="3" name="createeventemail">{{$createeventemail}}</textarea>
										</br><b>Type [username] to print the user name. </b>
										</br><b>Type [eventname] to print the event name. </b>
										</br><b>Type [startdate] to print the start date.</b>
										</br><b>Type [starttime] to print the start time.</b>
										</br><b>Type [enddate] to print the end date.</b>
										</br><b>Type [endtime] to print the end time.</b>
									</div>
								</div>
							  <div class="form-actions">
								<button type="submit" class="btn btn-primary">Save changes</button>
							  </div>
							</fieldset>
						  </form>
					</div>
				</div><!--/span-->
			
			</div><!--/row-->


<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Event Cancel Email Content</h2>
						
					</div>

					@if(Session::has('cancel_event_content'))
			
						<div class="alert alert-success">
							<button type="button" class="close" data-dismiss="alert">×</button>
							Email Content have been updated
						</div>
					@endif
					<p><b>User cancels an event</b></p> 
					<div class="box-content">
						<form class="form-horizontal" action="{{URL::to('/admin/canceleventemail')}}" method="post">
							<fieldset>
								<div class="control-group">
									<label class="control-label">Subject : </label>
									<div class="controls">
										<input type="text" class="input-xlarge focused" name="canceleventemailsubject" id="encryption" value="{{$canceleventemailsubject}}"/>
									</div>
								</div>

								<div class="control-group">
									<label class="control-label">Content : </label>
									<div class="controls">
										<textarea class="span8 m-wrap" rows="3" name="canceleventemail">{{$canceleventemail}}</textarea>
										</br><b>Type [username] to print the user name. </b>
										</br><b>Type [eventname] to print the event name. </b>
	
									</div>
								</div>
							  <div class="form-actions">
								<button type="submit" class="btn btn-primary">Save changes</button>
							  </div>
							</fieldset>
						  </form>
					</div>
				</div><!--/span-->
			
			</div><!--/row-->

<div class="row-fluid sortable">
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon white edit"></i><span class="break"></span>Ticket Cancel Email Content</h2>
						
					</div>

					@if(Session::has('cancel_ticket_content'))
			
						<div class="alert alert-success">
							<button type="button" class="close" data-dismiss="alert">×</button>
							Email Content have been updated
						</div>
					@endif
					<p><b>User cancels a ticket</b></p> 
					<div class="box-content">
						<form class="form-horizontal" action="{{URL::to('/admin/cancelticketemail')}}" method="post">
							<fieldset>
								<div class="control-group">
									<label class="control-label">Subject : </label>
									<div class="controls">
										<input type="text" class="input-xlarge focused" name="cancelticketemailsubject" id="encryption" value="{{$cancelticketemailsubject}}"/>
									</div>
								</div>

								<div class="control-group">
									<label class="control-label">Content : </label>
									<div class="controls">
										<textarea class="span8 m-wrap" rows="3" name="cancelticketemail">{{$cancelticketemail}}</textarea>
										</br><b>Type [username] to print the user name. </b>
										</br><b>Type [bookingid] to print the event name. </b>
										</br><b>Type [refundamount] to print the refund amount.</b>
										</br><b>Type [transactiontype] to print the transaction type.</b>

									</div>
								</div>
							  <div class="form-actions">
								<button type="submit" class="btn btn-primary">Save changes</button>
							  </div>
							</fieldset>
						  </form>
					</div>
				</div><!--/span-->
			
			</div><!--/row-->


		

@stop


@section('js')


@stop
