
@extends('pageshell')

@section('head')
  
  
<link type="text/css" rel="stylesheet"  href="{{ URL::asset('web/Content/jquery-te-1.4.0.css') }}">

<link type="text/css" rel="stylesheet"  href="{{ URL::asset('web/Content/myprofile.css') }}">


<!-- Google web fonts -->
<link href="http://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700" rel='stylesheet' />

@stop

@section('content')
<div class="g-grid">
    <form id="organizer_form" action="{{ URL::to('user/orgprofile') }}" method="POST" accept-charset="utf-8" enctype="multipart/form-data" class="js-organizer_form responsive-form">

        <div class="g-group l-block-4">

            @if(Session::has('success'))
            <section class="g-cell g-cell-12-12 l-padded-v-bottom-3">
                <div class="l-block-2 notification notification--success">
                    <i class="ico-success"></i>
                    Your profile has been updated !
                </div>
            </section>
            @endif

            <section class="g-vertical-group g-cell-12-12 g-cell-lg-3-12 js-organizer-logo-container">
                

                <div class="g-cell g-cell-4-12 g-cell-md-3-12 g-cell-lg-3-3">
                    <div class="organizer-logo-wrapper ratio-parent-1-1">
                        <div class="ratio-child">
                            <table>
                              <tr>
                                 <td class="js-logo-cell">
                                    @if($image_url)

                                         <img src="{{ URL::to('uploads/profile_images/' . $image_url) }}" id="image_url"/>
                                    @else 
                                        <img src="{{ URL::to('uploads/profile_images/default_profile.png') }}" id="image_url"/>
                                    @endif        
                                 </td>
                              </tr>
                           </table>
                        </div>
                    </div>
                </div>

                <div class="g-cell g-cell-8-12 g-cell-md-9-12 g-cell-lg-3-3 l-align-center-lg">
                    
                        <section class="js-select-file-section " @if($image_url != null) style="display:none" @endif id="choose_file">
                            <p class="text-body--faint">
                                JPG, GIF or PNG. These are square images that make best.
                            </p>
                            <div class="controls">
                                {{ Form::file('file', array("title"=>'Choose a file', "id"=>"file")) }}
                            </div>
                        </section>
                   
                        <section class="js-remove-logo-section"  @if($image_url == null) style="display:none" @endif id="remove_file">
                            <div class="l-block-2">
                                <span class="organizer-logo-btn btn btn--secondary js-logo-remove-btn" id="remove_img">
                                    Remove
                                </span>
                            </div>
                        </section>
                </div>    
            </section>

            <section class="g-vertical-group g-cell-12-12 g-cell-lg-9-12">
                <div class="g-cell g-cell-12-12 g-cell-md-10-12 g-cell-lg-7-9 js-organizer-info-container">
    <p class="text-body-large">Organizer name</p>
    <p class="l-block-1"><input data-check="{}" id="id_organizer_name" name="name" type="text" value="{{$name}}"></p>

    <p class="text-body-large l-block-2">About the organizer</p>
    
    
<textarea name="description" class="jqte-test">{{$description}}</textarea>


    
    
    <p class="text-body-large">
        <input @if($use_description) checked @endif data-check="{}" id="id_single_desc" name="use_description" type="checkbox">
        <label class="text-body--faint">
            Use this description on my event pages
        </label>
    </p>

    <p class="l-block-2 text-body-large">
        Website
    </p>
    <p class="l-block-1"><input data-check="{}" id="id_website" name="website" type="text" value="{{$website}}"></p>
    
    
   
</div>

                <div class="l-block-4 js-social-settings social-settings js-social-settings">
    <div class="g-cell g-cell-12-12 g-cell-md-8-12 g-cell-lg-4-9">
        <h2 class="text-heading-primary">
            Integrate Social Networks
        </h2>
        <p class="l-block-2 text-body-large">
            Facebook page
        </p>
        <p class="l-block-1 social-input text-body-large">
            <span>facebook.com/</span><input data-check="{}" id="id_facebook" name="facebook_link" type="text" value="{{$facebook_link}}">
        </p>
        <p class="l-block-1 responsive-form__field-error js-facebook-error">
        </p>
    </div>
</div>

                


                <div class="g-cell g-cell-12-12">
                    <div class="organizer-buttons-divider"></div>
                    <input type="submit" class="btn btn--medium" data-automation="save-my-profile" value="Save">
                    <a class="btn btn--medium btn--secondary" href="{{ URL::to('events/organizerprofile' .'/'.Auth::user()->id)}}" target="_blank">View profile</a>
                </div>
            </section>
        </div>
        <div style="display:none"><input type="hidden" name="csrfmiddlewaretoken" value="ZxQSTixS8Og3Qz6NalKeZA66qqVG2fok"></div>
    </form>
</div>

    </div>
@stop

@section('js')

 
  
  <script type="text/javascript" src="{{ URL::asset('web/js/jquery-te-1.4.0.min.js')}}"   charset="utf-8"></script>
  <script type="text/javascript" src="{{ URL::asset('web/js/myprofile.js')}}"   charset="utf-8"></script>


<script>
	$('.jqte-test').jqte();
	
	// settings of status
	var jqteStatus = true;
	$(".status").click(function()
	{
		jqteStatus = jqteStatus ? false : true;
		$('.jqte-test').jqte({"status" : jqteStatus})
	});

    $("#remove_img").click(function(){
        $.post("{{URL::to('/user/removeimage')}}",function(){
            $("#choose_file").show();
            $("#remove_file").hide();
            $("#image_url").attr("src","{{ URL::to('uploads/profile_images/default_profile.png') }}");
        });

    });
</script>


@stop