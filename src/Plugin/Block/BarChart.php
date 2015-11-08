<?php

namespace Drupal\angular_chart\Plugin\Block;

use Drupal\Core\Block\BlockBase;
/**
 * Render Bar Chart block.
 *
 * @Block(
 *   id = "bar_chart_block",
 *   admin_label = @Translation("Bar Chart"),
 *   category = @Translation("Blocks")
 * )
 */
class BarChart extends BlockBase {

  public function build() {
    return array(
      '#theme' => 'bar_chart',
    );
  }
}
