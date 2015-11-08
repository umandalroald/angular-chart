<?php

namespace Drupal\angular_chart\Plugin\Block

use Drupal\Core\Block\BlockBase;
/**
 * Render Doughnut Chart block.
 *
 * @Block(
 *   id = "doughnut_chart_block",
 *   admin_label = @Translation("Doughnut Chart"),
 *   category = @Translation("Blocks")
 * )
 */
class DoughnutChart extends BlockBase {

  public function build() {
    return array(
      '#theme' => 'doughnut_chart',
    );
  }
}
