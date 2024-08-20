import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <Card className="text-center bg-primary">
      <Card.Header>ShoesStore.com</Card.Header>
      <div>
      <div class="container text-center">
  <div class="row row-cols-3 row-cols-lg-3 g-2 g-lg-3">
    
    <div class="col">
      <div class="p-3">Nossa localização</div>
    </div>
    <div class="col">
      <div class="p-3">GitHub</div>
    </div>
    <div class="col">
      <div class="p-3">Sugestões</div>
    </div>

  
  </div>
</div>
      </div>
      
    </Card>
  );
}

export default Footer;