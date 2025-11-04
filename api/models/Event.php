<?php
class Event {
    private $conn;
    private $table = 'events';

    // Event properties
    public $id;
    public $title;
    public $event_date;
    public $event_time;
    public $location;
    public $description;
    public $link;
    public $status;
    public $created_at;
    public $updated_at;

    // Constructor
    public function __construct($db) {
        $this->conn = $db;
    }

    // Get all active events
    public function getActiveEvents() {
        $query = "SELECT * FROM " . $this->table . " 
                  WHERE status = 'active' 
                  AND event_date >= CURDATE()
                  ORDER BY event_date ASC";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        
        return $stmt;
    }

    // Get all events (admin)
    public function getAllEvents() {
        $query = "SELECT * FROM " . $this->table . " 
                  ORDER BY event_date DESC";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        
        return $stmt;
    }

    // Get single event
    public function getEvent($id) {
        $query = "SELECT * FROM " . $this->table . " 
                  WHERE id = :id LIMIT 1";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if($row) {
            $this->id = $row['id'];
            $this->title = $row['title'];
            $this->event_date = $row['event_date'];
            $this->event_time = $row['event_time'];
            $this->location = $row['location'];
            $this->description = $row['description'];
            $this->link = $row['link'];
            $this->status = $row['status'];
            $this->created_at = $row['created_at'];
            $this->updated_at = $row['updated_at'];
            
            return true;
        }
        
        return false;
    }

    // Create event
    public function create() {
        $query = "INSERT INTO " . $this->table . " 
                  (title, event_date, event_time, location, description, link, status) 
                  VALUES 
                  (:title, :event_date, :event_time, :location, :description, :link, :status)";

        $stmt = $this->conn->prepare($query);

        // Clean data
        $this->title = htmlspecialchars(strip_tags($this->title));
        $this->event_date = htmlspecialchars(strip_tags($this->event_date));
        $this->event_time = htmlspecialchars(strip_tags($this->event_time));
        $this->location = htmlspecialchars(strip_tags($this->location));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->link = htmlspecialchars(strip_tags($this->link));
        $this->status = htmlspecialchars(strip_tags($this->status));

        // Bind data
        $stmt->bindParam(':title', $this->title);
        $stmt->bindParam(':event_date', $this->event_date);
        $stmt->bindParam(':event_time', $this->event_time);
        $stmt->bindParam(':location', $this->location);
        $stmt->bindParam(':description', $this->description);
        $stmt->bindParam(':link', $this->link);
        $stmt->bindParam(':status', $this->status);

        if($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            return true;
        }

        return false;
    }

    // Update event
    public function update() {
        $query = "UPDATE " . $this->table . " 
                  SET title = :title,
                      event_date = :event_date,
                      event_time = :event_time,
                      location = :location,
                      description = :description,
                      link = :link,
                      status = :status
                  WHERE id = :id";

        $stmt = $this->conn->prepare($query);

        // Clean data
        $this->title = htmlspecialchars(strip_tags($this->title));
        $this->event_date = htmlspecialchars(strip_tags($this->event_date));
        $this->event_time = htmlspecialchars(strip_tags($this->event_time));
        $this->location = htmlspecialchars(strip_tags($this->location));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->link = htmlspecialchars(strip_tags($this->link));
        $this->status = htmlspecialchars(strip_tags($this->status));
        $this->id = htmlspecialchars(strip_tags($this->id));

        // Bind data
        $stmt->bindParam(':title', $this->title);
        $stmt->bindParam(':event_date', $this->event_date);
        $stmt->bindParam(':event_time', $this->event_time);
        $stmt->bindParam(':location', $this->location);
        $stmt->bindParam(':description', $this->description);
        $stmt->bindParam(':link', $this->link);
        $stmt->bindParam(':status', $this->status);
        $stmt->bindParam(':id', $this->id);

        if($stmt->execute()) {
            return true;
        }

        return false;
    }

    // Delete event
    public function delete() {
        $query = "DELETE FROM " . $this->table . " WHERE id = :id";

        $stmt = $this->conn->prepare($query);

        // Clean data
        $this->id = htmlspecialchars(strip_tags($this->id));

        // Bind id
        $stmt->bindParam(':id', $this->id);

        if($stmt->execute()) {
            return true;
        }

        return false;
    }
}
?>
