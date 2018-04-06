import $ from 'jquery'

export default function (svgStyleClass, htmlStyleClass, commonClass) {
  const svgStyle = svgStyleClass
  const htmlStyle = htmlStyleClass
  const selector = '[data-class|=' + commonClass + ']'
  const $elementTab = $(selector)

  $elementTab.each(function () {
    const $svgEl = $(this)
    const $htmlEl = $('.' + $svgEl.attr('data-class'))
    const href = $htmlEl.attr('href')
    $svgEl.attr('href', href)

    $svgEl.hover(
      function () {
        $htmlEl.addClass(htmlStyle)
        $svgEl.addClass(svgStyle)
      }, function () {
        $htmlEl.removeClass(htmlStyle)
        $svgEl.removeClass(svgStyle)
      }
    )

    $htmlEl.hover(
      function () {
        $svgEl.addClass(svgStyle)
        $htmlEl.addClass(htmlStyle)
      }, function () {
        $svgEl.removeClass(svgStyle)
        $htmlEl.removeClass(htmlStyle)
      }
    )
  })
}