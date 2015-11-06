<?php

namespace Drupal\angular_chart\Plugin\Block;

use Drupal\Core\Block\BlockBase;
/**
 * Provides my custom block.
 *
 * @Block(
 *   id = "angular_chart_block",
 *   admin_label = @Translation("Angular Chart Block"),
 *   category = @Translation("Blocks")
 * )
 */
class AngularChartBlock extends BlockBase {

  public function build() {
    return array(
      '#theme' => 'angular_chart',
      /**
      '#attached' => array(
        'library' =>  array(
          'angular_chart/js/script.js'
        ),
      ),
      */
    );
  }

}
