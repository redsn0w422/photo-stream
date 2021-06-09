(function(html) {
const id = document.currentScript.getAttribute('data-photo-id');
const url = document.currentScript.getAttribute('data-photo-url');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
openPhoto(id, url);
lazyload();
})(`
<li class="item " id="gnp-twenty-nine" style="background-image: url('/photos/tint/gnp_twenty_nine-65ba1d.jpg')" title="gnp_twenty_nine">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_twenty_nine-ccf4df.jpg" src="/photos/tint/gnp_twenty_nine-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_twenty_nine-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-twenty-nine" data-target="gnp-twenty-nine">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/cat-window-hunter" data-target="cat-window-hunter" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/1250</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="cat-window-hunter" style="background-image: url('/photos/tint/cat_window_hunter-65ba1d.jpg')" title="cat_window_hunter">
  <img class="lazyload" data-src="/photos/thumbnail/cat_window_hunter-ccf4df.jpg" src="/photos/tint/cat_window_hunter-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/cat_window_hunter-686656.jpg')"></span>
  </span>
  <a class="open" href="/cat-window-hunter" data-target="cat-window-hunter">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-twenty-nine" data-target="gnp-twenty-nine" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gnp-twenty-eight" data-target="gnp-twenty-eight" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/125</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="gnp-twenty-eight" style="background-image: url('/photos/tint/gnp_twenty_eight-65ba1d.jpg')" title="gnp_twenty_eight">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_twenty_eight-ccf4df.jpg" src="/photos/tint/gnp_twenty_eight-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_twenty_eight-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-twenty-eight" data-target="gnp-twenty-eight">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/cat-window-hunter" data-target="cat-window-hunter" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gnp-twenty-seven" data-target="gnp-twenty-seven" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/250</li>
    <li><span class="aperture"><em>f</em>/</span>4.0</li>
	</ul> -->
</li>
<li class="item " id="gnp-twenty-seven" style="background-image: url('/photos/tint/gnp_twenty_seven-65ba1d.jpg')" title="gnp_twenty_seven">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_twenty_seven-ccf4df.jpg" src="/photos/tint/gnp_twenty_seven-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_twenty_seven-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-twenty-seven" data-target="gnp-twenty-seven">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-twenty-eight" data-target="gnp-twenty-eight" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gnp-twenty-six" data-target="gnp-twenty-six" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/125</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
	</ul> -->
</li>
<li class="item " id="gnp-twenty-six" style="background-image: url('/photos/tint/gnp_twenty_six-65ba1d.jpg')" title="gnp_twenty_six">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_twenty_six-ccf4df.jpg" src="/photos/tint/gnp_twenty_six-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_twenty_six-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-twenty-six" data-target="gnp-twenty-six">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-twenty-seven" data-target="gnp-twenty-seven" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gnp-twenty-five" data-target="gnp-twenty-five" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/640</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
	</ul> -->
</li>
<li class="item " id="gnp-twenty-five" style="background-image: url('/photos/tint/gnp_twenty_five-65ba1d.jpg')" title="gnp_twenty_five">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_twenty_five-ccf4df.jpg" src="/photos/tint/gnp_twenty_five-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_twenty_five-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-twenty-five" data-target="gnp-twenty-five">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-twenty-six" data-target="gnp-twenty-six" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gnp-twenty-four" data-target="gnp-twenty-four" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/160</li>
    <li><span class="aperture"><em>f</em>/</span>4.5</li>
	</ul> -->
</li>
<li class="item " id="gnp-twenty-four" style="background-image: url('/photos/tint/gnp_twenty_four-65ba1d.jpg')" title="gnp_twenty_four">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_twenty_four-ccf4df.jpg" src="/photos/tint/gnp_twenty_four-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_twenty_four-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-twenty-four" data-target="gnp-twenty-four">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-twenty-five" data-target="gnp-twenty-five" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gnp-twenty-three" data-target="gnp-twenty-three" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/1000</li>
    <li><span class="aperture"><em>f</em>/</span>4.5</li>
	</ul> -->
</li>
<li class="item " id="gnp-twenty-three" style="background-image: url('/photos/tint/gnp_twenty_three-65ba1d.jpg')" title="gnp_twenty_three">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_twenty_three-ccf4df.jpg" src="/photos/tint/gnp_twenty_three-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_twenty_three-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-twenty-three" data-target="gnp-twenty-three">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-twenty-four" data-target="gnp-twenty-four" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gnp-twenty-two" data-target="gnp-twenty-two" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/400</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
	</ul> -->
</li>
<li class="item " id="gnp-twenty-two" style="background-image: url('/photos/tint/gnp_twenty_two-65ba1d.jpg')" title="gnp_twenty_two">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_twenty_two-ccf4df.jpg" src="/photos/tint/gnp_twenty_two-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_twenty_two-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-twenty-two" data-target="gnp-twenty-two">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-twenty-three" data-target="gnp-twenty-three" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gnp-twenty-one" data-target="gnp-twenty-one" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/200</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
	</ul> -->
</li>
<li class="item " id="gnp-twenty-one" style="background-image: url('/photos/tint/gnp_twenty_one-65ba1d.jpg')" title="gnp_twenty_one">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_twenty_one-ccf4df.jpg" src="/photos/tint/gnp_twenty_one-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_twenty_one-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-twenty-one" data-target="gnp-twenty-one">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-twenty-two" data-target="gnp-twenty-two" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gnp-twenty" data-target="gnp-twenty" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/160</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="gnp-twenty" style="background-image: url('/photos/tint/gnp_twenty-65ba1d.jpg')" title="gnp_twenty">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_twenty-ccf4df.jpg" src="/photos/tint/gnp_twenty-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_twenty-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-twenty" data-target="gnp-twenty">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-twenty-one" data-target="gnp-twenty-one" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gnp-nineteen" data-target="gnp-nineteen" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/800</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="gnp-nineteen" style="background-image: url('/photos/tint/gnp_nineteen-65ba1d.jpg')" title="gnp_nineteen">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_nineteen-ccf4df.jpg" src="/photos/tint/gnp_nineteen-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_nineteen-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-nineteen" data-target="gnp-nineteen">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-twenty" data-target="gnp-twenty" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gnp-seventeen" data-target="gnp-seventeen" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/1600</li>
    <li><span class="aperture"><em>f</em>/</span>6.3</li>
	</ul> -->
</li>
<li class="item " id="gnp-seventeen" style="background-image: url('/photos/tint/gnp_seventeen-65ba1d.jpg')" title="gnp_seventeen">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_seventeen-ccf4df.jpg" src="/photos/tint/gnp_seventeen-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_seventeen-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-seventeen" data-target="gnp-seventeen">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-nineteen" data-target="gnp-nineteen" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gnp-eighteen" data-target="gnp-eighteen" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/6400</li>
    <li><span class="aperture"><em>f</em>/</span>4.0</li>
	</ul> -->
</li>
<li class="item " id="gnp-eighteen" style="background-image: url('/photos/tint/gnp_eighteen-65ba1d.jpg')" title="gnp_eighteen">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_eighteen-ccf4df.jpg" src="/photos/tint/gnp_eighteen-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_eighteen-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-eighteen" data-target="gnp-eighteen">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-seventeen" data-target="gnp-seventeen" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gnp-sixteen" data-target="gnp-sixteen" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/320</li>
    <li><span class="aperture"><em>f</em>/</span>6.3</li>
	</ul> -->
</li>
<li class="item " id="gnp-sixteen" style="background-image: url('/photos/tint/gnp_sixteen-65ba1d.jpg')" title="gnp_sixteen">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_sixteen-ccf4df.jpg" src="/photos/tint/gnp_sixteen-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_sixteen-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-sixteen" data-target="gnp-sixteen">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-eighteen" data-target="gnp-eighteen" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gnp-fifteen" data-target="gnp-fifteen" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/200</li>
    <li><span class="aperture"><em>f</em>/</span>5.0</li>
	</ul> -->
</li>
<li class="item " id="gnp-fifteen" style="background-image: url('/photos/tint/gnp_fifteen-65ba1d.jpg')" title="gnp_fifteen">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_fifteen-ccf4df.jpg" src="/photos/tint/gnp_fifteen-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_fifteen-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-fifteen" data-target="gnp-fifteen">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-sixteen" data-target="gnp-sixteen" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gnp-thirteen" data-target="gnp-thirteen" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/640</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
	</ul> -->
</li>
<li class="item " id="gnp-thirteen" style="background-image: url('/photos/tint/gnp_thirteen-65ba1d.jpg')" title="gnp_thirteen">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_thirteen-ccf4df.jpg" src="/photos/tint/gnp_thirteen-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_thirteen-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-thirteen" data-target="gnp-thirteen">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-fifteen" data-target="gnp-fifteen" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gnp-fourteen" data-target="gnp-fourteen" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/1250</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
	</ul> -->
</li>
<li class="item " id="gnp-fourteen" style="background-image: url('/photos/tint/gnp_fourteen-65ba1d.jpg')" title="gnp_fourteen">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_fourteen-ccf4df.jpg" src="/photos/tint/gnp_fourteen-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_fourteen-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-fourteen" data-target="gnp-fourteen">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-thirteen" data-target="gnp-thirteen" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gnp-twelve" data-target="gnp-twelve" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/800</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
	</ul> -->
</li>
<li class="item " id="gnp-twelve" style="background-image: url('/photos/tint/gnp_twelve-65ba1d.jpg')" title="gnp_twelve">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_twelve-ccf4df.jpg" src="/photos/tint/gnp_twelve-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_twelve-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-twelve" data-target="gnp-twelve">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-fourteen" data-target="gnp-fourteen" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gnp-eleven" data-target="gnp-eleven" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/500</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
	</ul> -->
</li>
<li class="item " id="gnp-eleven" style="background-image: url('/photos/tint/gnp_eleven-65ba1d.jpg')" title="gnp_eleven">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_eleven-ccf4df.jpg" src="/photos/tint/gnp_eleven-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_eleven-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-eleven" data-target="gnp-eleven">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-twelve" data-target="gnp-twelve" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gnp-ten" data-target="gnp-ten" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/500</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
	</ul> -->
</li>
<li class="item " id="gnp-ten" style="background-image: url('/photos/tint/gnp_ten-65ba1d.jpg')" title="gnp_ten">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_ten-ccf4df.jpg" src="/photos/tint/gnp_ten-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_ten-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-ten" data-target="gnp-ten">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-eleven" data-target="gnp-eleven" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gnp-nine" data-target="gnp-nine" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/640</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
	</ul> -->
</li>
<li class="item " id="gnp-nine" style="background-image: url('/photos/tint/gnp_nine-65ba1d.jpg')" title="gnp_nine">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_nine-ccf4df.jpg" src="/photos/tint/gnp_nine-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_nine-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-nine" data-target="gnp-nine">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-ten" data-target="gnp-ten" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gnp-eight" data-target="gnp-eight" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/2000</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="gnp-eight" style="background-image: url('/photos/tint/gnp_eight-65ba1d.jpg')" title="gnp_eight">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_eight-ccf4df.jpg" src="/photos/tint/gnp_eight-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_eight-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-eight" data-target="gnp-eight">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-nine" data-target="gnp-nine" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gnp-seven" data-target="gnp-seven" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/500</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
	</ul> -->
</li>
<li class="item " id="gnp-seven" style="background-image: url('/photos/tint/gnp_seven-65ba1d.jpg')" title="gnp_seven">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_seven-ccf4df.jpg" src="/photos/tint/gnp_seven-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_seven-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-seven" data-target="gnp-seven">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-eight" data-target="gnp-eight" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gnp-six" data-target="gnp-six" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/400</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
	</ul> -->
</li>
<li class="item " id="gnp-six" style="background-image: url('/photos/tint/gnp_six-65ba1d.jpg')" title="gnp_six">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_six-ccf4df.jpg" src="/photos/tint/gnp_six-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_six-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-six" data-target="gnp-six">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-seven" data-target="gnp-seven" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/bb-sling" data-target="bb-sling" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/400</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
	</ul> -->
</li>
<li class="item " id="bb-sling" style="background-image: url('/photos/tint/bb_sling-65ba1d.jpg')" title="bb_sling">
  <img class="lazyload" data-src="/photos/thumbnail/bb_sling-ccf4df.jpg" src="/photos/tint/bb_sling-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/bb_sling-686656.jpg')"></span>
  </span>
  <a class="open" href="/bb-sling" data-target="bb-sling">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-six" data-target="gnp-six" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gnp-five" data-target="gnp-five" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/640</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
	</ul> -->
</li>
<li class="item " id="gnp-five" style="background-image: url('/photos/tint/gnp_five-65ba1d.jpg')" title="gnp_five">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_five-ccf4df.jpg" src="/photos/tint/gnp_five-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_five-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-five" data-target="gnp-five">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/bb-sling" data-target="bb-sling" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gnp-four" data-target="gnp-four" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
	</ul> -->
</li>
<li class="item " id="gnp-four" style="background-image: url('/photos/tint/gnp_four-65ba1d.jpg')" title="gnp_four">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_four-ccf4df.jpg" src="/photos/tint/gnp_four-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_four-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-four" data-target="gnp-four">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-five" data-target="gnp-five" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gnp-two" data-target="gnp-two" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/640</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
	</ul> -->
</li>
<li class="item " id="gnp-two" style="background-image: url('/photos/tint/gnp_two-65ba1d.jpg')" title="gnp_two">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_two-ccf4df.jpg" src="/photos/tint/gnp_two-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_two-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-two" data-target="gnp-two">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-four" data-target="gnp-four" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gnp-three" data-target="gnp-three" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/640</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
	</ul> -->
</li>
<li class="item " id="gnp-three" style="background-image: url('/photos/tint/gnp_three-65ba1d.jpg')" title="gnp_three">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_three-ccf4df.jpg" src="/photos/tint/gnp_three-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_three-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-three" data-target="gnp-three">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-two" data-target="gnp-two" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/astro" data-target="astro" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/640</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
	</ul> -->
</li>
<li class="item " id="astro" style="background-image: url('/photos/tint/astro-65ba1d.jpg')" title="astro">
  <img class="lazyload" data-src="/photos/thumbnail/astro-ccf4df.jpg" src="/photos/tint/astro-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/astro-686656.jpg')"></span>
  </span>
  <a class="open" href="/astro" data-target="astro">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-three" data-target="gnp-three" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gnp-one" data-target="gnp-one" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>20/1</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="gnp-one" style="background-image: url('/photos/tint/gnp_one-65ba1d.jpg')" title="gnp_one">
  <img class="lazyload" data-src="/photos/thumbnail/gnp_one-ccf4df.jpg" src="/photos/tint/gnp_one-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/gnp_one-686656.jpg')"></span>
  </span>
  <a class="open" href="/gnp-one" data-target="gnp-one">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/astro" data-target="astro" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/campfire" data-target="campfire" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/800</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="campfire" style="background-image: url('/photos/tint/campfire-65ba1d.jpg')" title="campfire">
  <img class="lazyload" data-src="/photos/thumbnail/campfire-ccf4df.jpg" src="/photos/tint/campfire-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/campfire-686656.jpg')"></span>
  </span>
  <a class="open" href="/campfire" data-target="campfire">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gnp-one" data-target="gnp-one" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/campfire-two" data-target="campfire-two" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
	</ul> -->
</li>
<li class="item " id="campfire-two" style="background-image: url('/photos/tint/campfire_two-65ba1d.jpg')" title="campfire_two">
  <img class="lazyload" data-src="/photos/thumbnail/campfire_two-ccf4df.jpg" src="/photos/tint/campfire_two-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/campfire_two-686656.jpg')"></span>
  </span>
  <a class="open" href="/campfire-two" data-target="campfire-two">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/campfire" data-target="campfire" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/strawberry-hill-eight" data-target="strawberry-hill-eight" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/25</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="strawberry-hill-eight" style="background-image: url('/photos/tint/strawberry_hill_eight-65ba1d.jpg')" title="strawberry_hill_eight">
  <img class="lazyload" data-src="/photos/thumbnail/strawberry_hill_eight-ccf4df.jpg" src="/photos/tint/strawberry_hill_eight-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/strawberry_hill_eight-686656.jpg')"></span>
  </span>
  <a class="open" href="/strawberry-hill-eight" data-target="strawberry-hill-eight">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/campfire-two" data-target="campfire-two" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/strawberry-hill-seven" data-target="strawberry-hill-seven" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/500</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="strawberry-hill-seven" style="background-image: url('/photos/tint/strawberry_hill_seven-65ba1d.jpg')" title="strawberry_hill_seven">
  <img class="lazyload" data-src="/photos/thumbnail/strawberry_hill_seven-ccf4df.jpg" src="/photos/tint/strawberry_hill_seven-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/strawberry_hill_seven-686656.jpg')"></span>
  </span>
  <a class="open" href="/strawberry-hill-seven" data-target="strawberry-hill-seven">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/strawberry-hill-eight" data-target="strawberry-hill-eight" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/strawberry-hill-nine" data-target="strawberry-hill-nine" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/250</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
	</ul> -->
</li>
<li class="item " id="strawberry-hill-nine" style="background-image: url('/photos/tint/strawberry_hill_nine-65ba1d.jpg')" title="strawberry_hill_nine">
  <img class="lazyload" data-src="/photos/thumbnail/strawberry_hill_nine-ccf4df.jpg" src="/photos/tint/strawberry_hill_nine-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/strawberry_hill_nine-686656.jpg')"></span>
  </span>
  <a class="open" href="/strawberry-hill-nine" data-target="strawberry-hill-nine">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/strawberry-hill-seven" data-target="strawberry-hill-seven" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/strawberry-hill-six" data-target="strawberry-hill-six" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/6400</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="strawberry-hill-six" style="background-image: url('/photos/tint/strawberry_hill_six-65ba1d.jpg')" title="strawberry_hill_six">
  <img class="lazyload" data-src="/photos/thumbnail/strawberry_hill_six-ccf4df.jpg" src="/photos/tint/strawberry_hill_six-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/strawberry_hill_six-686656.jpg')"></span>
  </span>
  <a class="open" href="/strawberry-hill-six" data-target="strawberry-hill-six">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/strawberry-hill-nine" data-target="strawberry-hill-nine" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/avocado-toast" data-target="avocado-toast" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/200</li>
    <li><span class="aperture"><em>f</em>/</span>3.2</li>
	</ul> -->
</li>
<li class="item " id="avocado-toast" style="background-image: url('/photos/tint/avocado_toast-65ba1d.jpg')" title="avocado_toast">
  <img class="lazyload" data-src="/photos/thumbnail/avocado_toast-ccf4df.jpg" src="/photos/tint/avocado_toast-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/avocado_toast-686656.jpg')"></span>
  </span>
  <a class="open" href="/avocado-toast" data-target="avocado-toast">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/strawberry-hill-six" data-target="strawberry-hill-six" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/hauser" data-target="hauser" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/125</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
	</ul> -->
</li>
<li class="item " id="hauser" style="background-image: url('/photos/tint/hauser-65ba1d.jpg')" title="hauser">
  <img class="lazyload" data-src="/photos/thumbnail/hauser-ccf4df.jpg" src="/photos/tint/hauser-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/hauser-686656.jpg')"></span>
  </span>
  <a class="open" href="/hauser" data-target="hauser">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/avocado-toast" data-target="avocado-toast" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/strawberry-hill-top" data-target="strawberry-hill-top" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/160</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="strawberry-hill-top" style="background-image: url('/photos/tint/strawberry_hill_top-65ba1d.jpg')" title="strawberry_hill_top">
  <img class="lazyload" data-src="/photos/thumbnail/strawberry_hill_top-ccf4df.jpg" src="/photos/tint/strawberry_hill_top-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/strawberry_hill_top-686656.jpg')"></span>
  </span>
  <a class="open" href="/strawberry-hill-top" data-target="strawberry-hill-top">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/hauser" data-target="hauser" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/strawberry-hill-five" data-target="strawberry-hill-five" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/125</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
	</ul> -->
</li>
<li class="item " id="strawberry-hill-five" style="background-image: url('/photos/tint/strawberry_hill_five-65ba1d.jpg')" title="strawberry_hill_five">
  <img class="lazyload" data-src="/photos/thumbnail/strawberry_hill_five-ccf4df.jpg" src="/photos/tint/strawberry_hill_five-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/strawberry_hill_five-686656.jpg')"></span>
  </span>
  <a class="open" href="/strawberry-hill-five" data-target="strawberry-hill-five">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/strawberry-hill-top" data-target="strawberry-hill-top" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/strawberry-hill-three" data-target="strawberry-hill-three" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/640</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="strawberry-hill-three" style="background-image: url('/photos/tint/strawberry_hill_three-65ba1d.jpg')" title="strawberry_hill_three">
  <img class="lazyload" data-src="/photos/thumbnail/strawberry_hill_three-ccf4df.jpg" src="/photos/tint/strawberry_hill_three-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/strawberry_hill_three-686656.jpg')"></span>
  </span>
  <a class="open" href="/strawberry-hill-three" data-target="strawberry-hill-three">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/strawberry-hill-five" data-target="strawberry-hill-five" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/strawberry-hill-four" data-target="strawberry-hill-four" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/800</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="strawberry-hill-four" style="background-image: url('/photos/tint/strawberry_hill_four-65ba1d.jpg')" title="strawberry_hill_four">
  <img class="lazyload" data-src="/photos/thumbnail/strawberry_hill_four-ccf4df.jpg" src="/photos/tint/strawberry_hill_four-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/strawberry_hill_four-686656.jpg')"></span>
  </span>
  <a class="open" href="/strawberry-hill-four" data-target="strawberry-hill-four">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/strawberry-hill-three" data-target="strawberry-hill-three" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/strawberry-hill-two" data-target="strawberry-hill-two" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/640</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="strawberry-hill-two" style="background-image: url('/photos/tint/strawberry_hill_two-65ba1d.jpg')" title="strawberry_hill_two">
  <img class="lazyload" data-src="/photos/thumbnail/strawberry_hill_two-ccf4df.jpg" src="/photos/tint/strawberry_hill_two-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/strawberry_hill_two-686656.jpg')"></span>
  </span>
  <a class="open" href="/strawberry-hill-two" data-target="strawberry-hill-two">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/strawberry-hill-four" data-target="strawberry-hill-four" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/strawberry-hill-one" data-target="strawberry-hill-one" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/320</li>
    <li><span class="aperture"><em>f</em>/</span>4.0</li>
	</ul> -->
</li>
<li class="item " id="strawberry-hill-one" style="background-image: url('/photos/tint/strawberry_hill_one-65ba1d.jpg')" title="strawberry_hill_one">
  <img class="lazyload" data-src="/photos/thumbnail/strawberry_hill_one-ccf4df.jpg" src="/photos/tint/strawberry_hill_one-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/strawberry_hill_one-686656.jpg')"></span>
  </span>
  <a class="open" href="/strawberry-hill-one" data-target="strawberry-hill-one">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/strawberry-hill-two" data-target="strawberry-hill-two" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/horse-trail-two" data-target="horse-trail-two" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/320</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="horse-trail-two" style="background-image: url('/photos/tint/horse_trail_two-65ba1d.jpg')" title="horse_trail_two">
  <img class="lazyload" data-src="/photos/thumbnail/horse_trail_two-ccf4df.jpg" src="/photos/tint/horse_trail_two-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/horse_trail_two-686656.jpg')"></span>
  </span>
  <a class="open" href="/horse-trail-two" data-target="horse-trail-two">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/strawberry-hill-one" data-target="strawberry-hill-one" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/horse-trail-three" data-target="horse-trail-three" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/125</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="horse-trail-three" style="background-image: url('/photos/tint/horse_trail_three-65ba1d.jpg')" title="horse_trail_three">
  <img class="lazyload" data-src="/photos/thumbnail/horse_trail_three-ccf4df.jpg" src="/photos/tint/horse_trail_three-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/horse_trail_three-686656.jpg')"></span>
  </span>
  <a class="open" href="/horse-trail-three" data-target="horse-trail-three">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/horse-trail-two" data-target="horse-trail-two" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/horse-trail-four" data-target="horse-trail-four" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/125</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="horse-trail-four" style="background-image: url('/photos/tint/horse_trail_four-65ba1d.jpg')" title="horse_trail_four">
  <img class="lazyload" data-src="/photos/thumbnail/horse_trail_four-ccf4df.jpg" src="/photos/tint/horse_trail_four-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/horse_trail_four-686656.jpg')"></span>
  </span>
  <a class="open" href="/horse-trail-four" data-target="horse-trail-four">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/horse-trail-three" data-target="horse-trail-three" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/cat-window-out" data-target="cat-window-out" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/125</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="cat-window-out" style="background-image: url('/photos/tint/cat_window_out-65ba1d.jpg')" title="cat_window_out">
  <img class="lazyload" data-src="/photos/thumbnail/cat_window_out-ccf4df.jpg" src="/photos/tint/cat_window_out-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/cat_window_out-686656.jpg')"></span>
  </span>
  <a class="open" href="/cat-window-out" data-target="cat-window-out">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/horse-trail-four" data-target="horse-trail-four" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/horse-trail-one" data-target="horse-trail-one" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/125</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="horse-trail-one" style="background-image: url('/photos/tint/horse_trail_one-65ba1d.jpg')" title="horse_trail_one">
  <img class="lazyload" data-src="/photos/thumbnail/horse_trail_one-ccf4df.jpg" src="/photos/tint/horse_trail_one-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/horse_trail_one-686656.jpg')"></span>
  </span>
  <a class="open" href="/horse-trail-one" data-target="horse-trail-one">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/cat-window-out" data-target="cat-window-out" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/cat-window" data-target="cat-window" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/125</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="cat-window" style="background-image: url('/photos/tint/cat_window-65ba1d.jpg')" title="cat_window">
  <img class="lazyload" data-src="/photos/thumbnail/cat_window-ccf4df.jpg" src="/photos/tint/cat_window-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/cat_window-686656.jpg')"></span>
  </span>
  <a class="open" href="/cat-window" data-target="cat-window">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/horse-trail-one" data-target="horse-trail-one" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/cat-groceries" data-target="cat-groceries" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/125</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="cat-groceries" style="background-image: url('/photos/tint/cat_groceries-65ba1d.jpg')" title="cat_groceries">
  <img class="lazyload" data-src="/photos/thumbnail/cat_groceries-ccf4df.jpg" src="/photos/tint/cat_groceries-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/cat_groceries-686656.jpg')"></span>
  </span>
  <a class="open" href="/cat-groceries" data-target="cat-groceries">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/cat-window" data-target="cat-window" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/hammock-party" data-target="hammock-party" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/125</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="hammock-party" style="background-image: url('/photos/tint/hammock_party-65ba1d.jpg')" title="hammock_party">
  <img class="lazyload" data-src="/photos/thumbnail/hammock_party-ccf4df.jpg" src="/photos/tint/hammock_party-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/hammock_party-686656.jpg')"></span>
  </span>
  <a class="open" href="/hammock-party" data-target="hammock-party">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/cat-groceries" data-target="cat-groceries" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/calm-lake-ball" data-target="calm-lake-ball" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/125</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="calm-lake-ball" style="background-image: url('/photos/tint/calm_lake_ball-65ba1d.jpg')" title="calm_lake_ball">
  <img class="lazyload" data-src="/photos/thumbnail/calm_lake_ball-ccf4df.jpg" src="/photos/tint/calm_lake_ball-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/calm_lake_ball-686656.jpg')"></span>
  </span>
  <a class="open" href="/calm-lake-ball" data-target="calm-lake-ball">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/hammock-party" data-target="hammock-party" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/cat-sleeping" data-target="cat-sleeping" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/2000</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="cat-sleeping" style="background-image: url('/photos/tint/cat_sleeping-65ba1d.jpg')" title="cat_sleeping">
  <img class="lazyload" data-src="/photos/thumbnail/cat_sleeping-ccf4df.jpg" src="/photos/tint/cat_sleeping-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/cat_sleeping-686656.jpg')"></span>
  </span>
  <a class="open" href="/cat-sleeping" data-target="cat-sleeping">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/calm-lake-ball" data-target="calm-lake-ball" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/lonely-swing" data-target="lonely-swing" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/25</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="lonely-swing" style="background-image: url('/photos/tint/lonely_swing-65ba1d.jpg')" title="lonely_swing">
  <img class="lazyload" data-src="/photos/thumbnail/lonely_swing-ccf4df.jpg" src="/photos/tint/lonely_swing-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/lonely_swing-686656.jpg')"></span>
  </span>
  <a class="open" href="/lonely-swing" data-target="lonely-swing">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/cat-sleeping" data-target="cat-sleeping" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/calm-lake" data-target="calm-lake" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/8000</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="calm-lake" style="background-image: url('/photos/tint/calm_lake-65ba1d.jpg')" title="calm_lake">
  <img class="lazyload" data-src="/photos/thumbnail/calm_lake-ccf4df.jpg" src="/photos/tint/calm_lake-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/calm_lake-686656.jpg')"></span>
  </span>
  <a class="open" href="/calm-lake" data-target="calm-lake">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/lonely-swing" data-target="lonely-swing" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/hammock" data-target="hammock" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/1600</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="hammock" style="background-image: url('/photos/tint/hammock-65ba1d.jpg')" title="hammock">
  <img class="lazyload" data-src="/photos/thumbnail/hammock-ccf4df.jpg" src="/photos/tint/hammock-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/hammock-686656.jpg')"></span>
  </span>
  <a class="open" href="/hammock" data-target="hammock">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/calm-lake" data-target="calm-lake" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-1049" data-target="img-1049" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7M3</li>
    <li>1/1600</li>
    <li><span class="aperture"><em>f</em>/</span>2.8</li>
	</ul> -->
</li>
<li class="item " id="img-1049" style="background-image: url('/photos/tint/IMG_1049-65ba1d.jpg')" title="IMG_1049">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_1049-ccf4df.jpg" src="/photos/tint/IMG_1049-65ba1d.jpg" height="1536" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_1049-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-1049" data-target="img-1049">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/hammock" data-target="hammock" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-1032" data-target="img-1032" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/3500</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="img-1032" style="background-image: url('/photos/tint/IMG_1032-65ba1d.jpg')" title="IMG_1032">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_1032-ccf4df.jpg" src="/photos/tint/IMG_1032-65ba1d.jpg" height="2048" width="1536" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_1032-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-1032" data-target="img-1032">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-1049" data-target="img-1049" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-1022" data-target="img-1022" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/120</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="img-1022" style="background-image: url('/photos/tint/IMG_1022-65ba1d.jpg')" title="IMG_1022">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_1022-ccf4df.jpg" src="/photos/tint/IMG_1022-65ba1d.jpg" height="2048" width="1536" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_1022-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-1022" data-target="img-1022">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-1032" data-target="img-1032" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/deadstock" data-target="deadstock" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/750</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="deadstock" style="background-image: url('/photos/tint/deadstock-65ba1d.jpg')" title="deadstock">
  <img class="lazyload" data-src="/photos/thumbnail/deadstock-ccf4df.jpg" src="/photos/tint/deadstock-65ba1d.jpg" height="1536" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/deadstock-686656.jpg')"></span>
  </span>
  <a class="open" href="/deadstock" data-target="deadstock">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-1022" data-target="img-1022" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro Max</li>
    <li>1/60</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
`);