@extends('pageshell')

@section('content')

<div class="g-grid" style="margin-bottom:18%">
    <div class="l-align-center l-padded-v-2">

        <div class="l-padded-v-3 g-group">
            <div class="g-cell g-cell-1-1">
                <i class="ico-alert ico--xlarge ico--color-brand-yellow"></i>
            </div>
        </div>

        <div class="l-block-1 g-group">
            <div class="g-cell g-cell-1-1">
                <h1 class="text-heading-epic hide-small">
                    Could not find the page or the desired event.
                </h1>
                <h1 class="text-heading-primary show-small">
                    Could not find the page or the desired event.
                </h1>
            </div>
        </div>

        <div class="l-block-2 g-group">
            <div class="g-cell g-cell-1-1">
                <h2 class="text-heading-secondary text-body--faint hide-small">
                    If you think this message is in error.
                </h2>
                <p class="text-body-large show-small">
                    If you think this message is in error.
                </p>
            </div>
        </div>

        <div class="l-padded-v-3 g-group">
            <div class="g-cell g-cell-1-1">
                <section class="btn-group--responsive">
                    <a href="{{URL::to('user/createevent')}}" class="btn btn--small">Create Event</a>
                    <a href="#" onclick="event_dir()" class="btn btn--small btn--secondary">Find Event</a>
                </section>
            </div>
        </div>

    </div>
</div>

@stop