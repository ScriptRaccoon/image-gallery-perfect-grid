# Image gallery with perfect grid layout

Most image search engines show a gallery with the image search results with a perfect
grid layout, even though the original images have different sizes.
By a perfect grid layout I mean that all images have the same displayed height, remain their aspect ratio, are not cut (just scaled), have the same margin; the first image in a row starts at the very left, and the last image in a row ends at the very right (except perhaps for the last row).

![screenshot](/screenshot.png)

Looking for references online how to achieve this, you will most likely find the term 'masonry layout', which however usually does not meet all of the mentioned requirements above. For example, the horizontal masonry layout [here](https://css-tricks.com/piecing-together-approaches-for-a-css-masonry-layout/) allows resizing the divs just horizontally, thus violating the aspect ratio.

However, [this github blog post](https://github.com/xieranmaya/blog/issues/6) by 'xieranmaya' offers a solution. This respository is a 'summary' of that post and can be used as a template for image galleries with a perfect grid layout as described above. I have used it on [Actors Info](https://actorsinfo.herokuapp.com) for instance.
