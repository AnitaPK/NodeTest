$count = array_reduce($items, function ($count, $item) {
    if (strpos($item, 'age=') !== false) {
      $age = explode('=', $item)[1];
      if ($age >= 50) return $count + 1;
    }
    return $count;
  }, 0);

  print_r($count);


// Another logic for count how many age's are 50 or more then 50 
// foreach($items as $item){
// if(str_starts_with($item, 'age=') === true && filter_var($item, FILTER_SANITIZE_NUMBER_INT) >= 50)
// $count++;
// }
